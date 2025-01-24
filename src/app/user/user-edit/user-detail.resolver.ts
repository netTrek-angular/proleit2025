import {ResolveFn} from '@angular/router';
import {Observable} from 'rxjs';
import {inject} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

export const userDetailResolver: ResolveFn<Observable<User>> = (route, state) => {
  console.log(route, state);
  return inject( UserService ).getUsrById( route.params['id'] );
  // return 'saban' ;
  // return of (`saban ${route.params['id']}`) ;
};
