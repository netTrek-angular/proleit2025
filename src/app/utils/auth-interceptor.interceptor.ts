import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('authInterceptorInterceptor', req);
  const token = localStorage.getItem('token');
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  } else {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${btoa('Sabana:123456')}` // simuliere hier einen verschlüsselten token
      }
    });
  }
  return next(req);
};
