import { Routes } from '@angular/router';
import {UserComponent} from './user/user.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserAddComponent} from './user/user-add/user-add.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },   // domain/
  // { path: 'home', component: HomeComponent },
  { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)},
  { path: 'user', component: UserComponent,                       // domain/user
    children: [                                                   // dard ich nur Niutzen wenn die HTML der UserComponetn ein router-outlet verfügt
      { path: 'show/:id', component: UserDetailComponent },            // domain/user/show/[idDesUSer]                  Detainansiihct
      { path: 'edit/:id', component: UserEditComponent },         // domain/user/edit/idDesUSer]             Bearbeitungs Ansicht
      { path: 'add', component: UserAddComponent },               // domain/user/add                          Ansicht zum Hinzufügen
    ]
  },
  /*{ path: 'user/:id', component: UserDetailComponent },*/
  // { path: '', loadChildren: () => import('./settings/settings.routes')},
  { path: 'settings', loadChildren: () => import('./settings/settings.routes')},
  { path: 'contact', loadChildren: () => import('./contact/contact.routes') },
/*  { path: 'contact', component: ContactComponent,
    children: [
      { path: 'form', component: FormComponent },
      { path: 'map', component: MapComponent },
    ]
  },*/
  { path: '**', component: NotFoundComponent },
];
