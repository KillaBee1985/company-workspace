import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CensoringService {
  private readonly BANNED_WORDS = ['fuck', 'ass'];

  constructor() {}

  isAllowed(str: string): Observable<boolean> {
    // Here we immitate a HTTP call to some sort of censoring service
    if (this.BANNED_WORDS.includes(str)) {
      return of(false);
    }

    return of(true);
  }
}
