import {Component, input, output, signal} from '@angular/core';
import {User} from '../user';
import {UserListItemComponent} from './user-list-item/user-list-item.component';

@Component({
  selector: 'pl-user-list',
  imports: [
    UserListItemComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  users = input.required<User[]>()  ;
  userSelected = output<User | undefined>();
  selectedUser = signal<User | undefined>( undefined );

  selectUsr(user: User) {
    this.selectedUser.update( crr_selected => user === crr_selected ? undefined : user);
    this.userSelected.emit(user);
  }


}
