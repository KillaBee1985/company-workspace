import { Injectable } from '@angular/core';
import { TrendingService as GiphyTrendingService } from '@company-workspace/giphy-api';
import { TrendingParams, SearchResult } from '../types';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrendingService {
  constructor(private _giphySearch: GiphyTrendingService) {}

  trending(params: TrendingParams): Observable<SearchResult> {
    return this._giphySearch.trending(params);
  }
}
