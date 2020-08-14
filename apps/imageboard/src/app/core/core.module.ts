import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { GiphyApiModule } from '@company-workspace/giphy-api';
import { SWEAR_WORDS } from './tokens';

import { environment } from '../../environments/environment';
import { SearchInputModule } from './components/search-input/search-input.module';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatSnackBarModule,
    GiphyApiModule.forRoot({
      apiBaseUrl: environment.giphyBaseUrl,
      apiKey: environment.giphyApiKey,
    }),
  ],
  exports: [SearchInputModule],
  providers: [
    {
      provide: SWEAR_WORDS,
      useValue: ['fuck', 'ass'],
    },
  ],
})
export class CoreModule {}
