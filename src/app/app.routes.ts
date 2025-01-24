import { Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ContactComponent} from './contact/contact.component';
import {FormComponent} from './contact/form/form.component';
import {MapComponent} from './contact/map/map.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  { path: 'user', component: UserComponent },
  { path: 'contact', component: ContactComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'map', component: MapComponent },
    ]
  },
  { path: '**', component: NotFoundComponent },
];
