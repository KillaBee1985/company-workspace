import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { LandingPageComponent } from './landing-page.component';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingPageComponent,
      },
    ]),
  ],
})
export class LandingPageModule {}
