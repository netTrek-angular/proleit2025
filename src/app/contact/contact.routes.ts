import {Route, Routes} from '@angular/router';
import {ContactComponent} from './contact.component';
import {FormComponent} from './form/form.component';
import {MapComponent} from './map/map.component';


export const CONTACT_ROUTES: Routes = [
  {
    path: '', component: ContactComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'map', component: MapComponent },
    ]
  },
]

export default [...CONTACT_ROUTES] satisfies Route[];
