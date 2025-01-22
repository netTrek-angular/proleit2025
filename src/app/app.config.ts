import {ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'de'},
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
