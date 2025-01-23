import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  InjectionToken,
  LOCALE_ID,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {authInterceptorInterceptor} from './utils/auth-interceptor.interceptor';
import {errrorInterceptor} from './utils/errror.interceptor';

export const BASE_URL = new InjectionToken<string> ('Token 4 Base URL');

export const appConfig: ApplicationConfig = { // root injector
  providers: [
    { provide: BASE_URL, useValue: 'http://localhost:3000' }, //static Provider - value provider
    { provide: LOCALE_ID, useValue: 'de'}, //static Provider - value provider
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(
      withInterceptors( [
        authInterceptorInterceptor,
        errrorInterceptor
      ])
    ), // kein provide kein Service
    provideRouter(routes),
  ]
};
