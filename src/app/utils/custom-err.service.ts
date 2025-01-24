import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrService {

  toStuf( err: unknown ) {
    console.error( 'SABAN', err );
  }
}
