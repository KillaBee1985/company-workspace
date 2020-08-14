import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CensoringService } from '../../services';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private censoringService: CensoringService
  ) {
    this.searchForm = new FormGroup({
      query: new FormControl('', [], (ctrl: FormControl) => {
        return this.censoringService.isAllowed(ctrl.value).pipe(
          map((isAllowed) => {
            return isAllowed ? null : { notAllowed: true };
          })
        );
      }),
    });
  }

  search() {
    if (this.searchForm.invalid) {
      return;
    }
    const { query } = this.searchForm.value;
    if (!query) {
      return;
    }

    this.router.navigate(['search', query]);
  }
}
