import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../shared';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    SharedModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {
        path: ':q',
        component: SearchComponent,
      },
    ]),
  ],
})
export class SearchModule {}
