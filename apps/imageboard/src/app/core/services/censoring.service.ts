import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SWEAR_WORDS } from '../tokens';

@Injectable({ providedIn: 'root' })
export class CensoringService {
  constructor(@Inject(SWEAR_WORDS) private _bannedWords: string[]) {}

  isAllowed(str: string): Observable<boolean> {
    // Here we immitate a HTTP call to some sort of censoring service
    if (this._bannedWords.includes(str)) {
      return of(false);
    }

    return of(true);
  }
}
