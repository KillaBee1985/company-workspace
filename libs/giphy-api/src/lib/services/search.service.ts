import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResult, SearchParams } from '../types';
import { API_KEY, API_BASE_URL } from '../tokens';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchService {
  constructor(
    @Inject(API_KEY) private _apiKey: string,
    @Inject(API_BASE_URL) private _apiBase: string,
    private _http: HttpClient
  ) {}

  search(params: SearchParams): Observable<SearchResult> {
    return this._http.get<SearchResult>(`${this._apiBase}/search`, {
      params: {
        api_key: this._apiKey,
        limit: '25',
        offset: '0',
        ...(params as any),
      },
    });
  }
}
