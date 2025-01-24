import { HttpInterceptorFn } from '@angular/common/http';
import {tap} from 'rxjs';
import {inject} from '@angular/core';
import {CustomErrService} from './custom-err.service';

export const errrorInterceptor: HttpInterceptorFn = (req, next) => {
  const cerr = inject(CustomErrService);
  return next(req).pipe(
    tap ( {
      error: err => cerr.toStuf( err )
    })
  );
};
