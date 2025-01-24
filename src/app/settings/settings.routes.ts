import {Route, Routes} from '@angular/router';
import {MyAccountComponent} from './my-account/my-account.component';
import {GeneralComponent} from './general/general.component';


export const SETTINGS_ROUTES: Routes = [
    { path: 'account', component: MyAccountComponent },
    { path: 'general', component: GeneralComponent },
    { path: '', redirectTo: 'account', pathMatch: 'full' },
]

export default [...SETTINGS_ROUTES] satisfies Route[];
