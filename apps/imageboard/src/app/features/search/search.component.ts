import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, startWith, catchError } from 'rxjs/operators';
import { Observable, combineLatest, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { SearchService, SearchResult } from '../../core';

interface SearchRequest {
  loading?: boolean;
  error?: any;
  result: SearchResult;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  search$: Observable<SearchRequest>;
  pageIndex$: Observable<number>;

  readonly ITEMS_PER_PAGE = 25;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _searchService: SearchService
  ) {
    this.pageIndex$ = _route.queryParams.pipe(
      map((params) => (params.page ? parseInt(params.page, 10) : 0))
    );

    this.search$ = combineLatest([_route.params, this.pageIndex$]).pipe(
      switchMap(([params, pageIndex]) => {
        return this._createRequest({
          q: params.q,
          offset: pageIndex * this.ITEMS_PER_PAGE,
          limit: this.ITEMS_PER_PAGE,
        });
      })
    );
  }

  updatePagination(page: PageEvent) {
    this._router.navigate(['.'], {
      relativeTo: this._route,
      queryParams: {
        page: page.pageIndex || undefined,
      },
    });
  }

  private _createRequest(params: any): Observable<SearchRequest> {
    return this._searchService.search(params).pipe(
      map((response: any) => {
        return {
          result: response,
        };
      }),
      startWith({
        loading: true,
        result: null,
      }),
      catchError((error) => {
        return of({
          loading: false,
          error,
          result: null,
        });
      })
    );
  }
}
