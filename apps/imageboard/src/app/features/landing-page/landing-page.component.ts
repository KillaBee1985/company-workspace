import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TrendingService, SearchResult } from '../../core';
import { Observable } from 'rxjs';

interface SearchRequest {
  loading?: boolean;
  error?: any;
  result: SearchResult;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  trending$: Observable<SearchResult>;

  constructor(private trendingService: TrendingService) {
    this.trending$ = trendingService.trending({ offset: 0, limit: 50 });
  }
}
