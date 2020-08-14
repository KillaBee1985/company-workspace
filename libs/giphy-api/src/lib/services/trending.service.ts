import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult, TrendingParams } from '../types';
import { API_KEY, API_BASE_URL } from '../tokens';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TrendingService {
  constructor(
    @Inject(API_KEY) private _apiKey: string,
    @Inject(API_BASE_URL) private _apiBase: string,
    private _http: HttpClient
  ) {}

  trending(params: TrendingParams): Observable<SearchResult> {
    return this._http.get<SearchResult>(`${this._apiBase}/trending`, {
      params: {
        api_key: this._apiKey,
        limit: '25',
        offset: '0',
        ...(params as any),
      },
    });
  }
}
