import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  InjectionToken,
  LOCALE_ID,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const BASE_URL = new InjectionToken<string> ('Token 4 Base URL');

export const appConfig: ApplicationConfig = { // root injector
  providers: [
    { provide: BASE_URL, useValue: 'https://example.com' }, //static Provider - value provider
    { provide: LOCALE_ID, useValue: 'de'}, //static Provider - value provider
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ]
};
