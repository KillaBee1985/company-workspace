import { Injectable } from '@angular/core';
import { SearchService as GiphySearchService } from '@company-workspace/giphy-api';
import { Observable } from 'rxjs';
import { tap, switchMapTo } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SearchParams, SearchResult } from '../types';
import { CensoringService } from './censoring.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    private _giphySearch: GiphySearchService,
    private _censoring: CensoringService,
    private _notifications: MatSnackBar
  ) {}

  search(params: SearchParams): Observable<SearchResult> {
    return this._censoring.isAllowed(params.q).pipe(
      tap((allowed) => {
        if (!allowed) {
          this._notifications.open('Invalid search!', 'DISMISS', {
            duration: 3000,
          });
          throw new Error('Not ALLOWED!');
        }
      }),
      switchMapTo(this._giphySearch.search(params))
    );
  }
}
