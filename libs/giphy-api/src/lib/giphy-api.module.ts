import { NgModule, ModuleWithProviders } from '@angular/core';
import { API_KEY, API_BASE_URL } from './tokens';

export interface GiphyModuleConfig {
  apiKey: string;
  apiBaseUrl: string;
}

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class GiphyApiModule {
  static forRoot(
    config: GiphyModuleConfig
  ): ModuleWithProviders<GiphyApiModule> {
    return {
      ngModule: GiphyApiModule,
      providers: [
        {
          provide: API_KEY,
          useValue: config.apiKey,
        },
        {
          provide: API_BASE_URL,
          useValue: config.apiBaseUrl,
        },
      ],
    };
  }
}
