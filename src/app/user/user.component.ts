import {Component, inject} from '@angular/core';
import {User} from './user';
import {UserListComponent} from './user-list/user-list.component';
import {DangerDirective} from '../utils/danger.directive';
import {UserService} from './user.service';
import {AdminOnlyDirective} from '../utils/admin-only.directive';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'pl-user',
  imports: [
    UserListComponent,
    DangerDirective,
    AdminOnlyDirective,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  /*
  readonly locale = inject( LOCALE_ID ); // injiziere die Local ID aus dem Root Provider
  readonly baseUrl = inject( BASE_URL ); // injiziere die Local ID aus dem Root Provider
  */
  readonly $users = inject(UserService);

  usrSelected(selectedUsr: User | undefined) {
    this.$users.setSelectedUsr( this.$users.selectedUsr() === selectedUsr ? undefined : selectedUsr);
  }
}
