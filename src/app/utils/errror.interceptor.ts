import { HttpInterceptorFn } from '@angular/common/http';
import {tap} from 'rxjs';

export const errrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap ( {
      error: err => console.error(err)
    })
  );
};
