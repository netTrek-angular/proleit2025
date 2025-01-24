import { Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  { path: 'user', component: UserComponent },
  { path: 'contact', loadChildren: () => import('./contact/contact.routes') },
/*  { path: 'contact', component: ContactComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'map', component: MapComponent },
    ]
  },*/
  { path: '**', component: NotFoundComponent },
];
