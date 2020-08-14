import { LandingPageComponent } from './landing-page.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { TrendingService } from '../../core';

describe('landing-page.component', () => {
  let trendingSubject: Subject<any>;
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(() => {
    trendingSubject = new Subject();
    TestBed.configureTestingModule({
      imports: [MatGridListModule],
      declarations: [LandingPageComponent],
      providers: [
        {
          provide: TrendingService,
          useValue: {
            trending: () => trendingSubject,
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingPageComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should show loading message while loading', () => {
    expect(fixture.nativeElement.querySelector('.loading')).toBeTruthy();
  });

  it('should show grid when images are loaded', () => {
    trendingSubject.next({ data: [] });
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.loading')).not.toBeTruthy();
    expect(fixture.nativeElement.querySelector('mat-grid-list')).toBeTruthy();
  });
});
