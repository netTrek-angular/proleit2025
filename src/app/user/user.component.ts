import {Component, computed, signal} from '@angular/core';
import {User} from './user';
import {UserListComponent} from './user-list/user-list.component';

@Component({
  selector: 'pl-user',
  imports: [
    UserListComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  users = signal<User[]>([
    {name: "Saban", age: 25, id: 1, avatar: 'cat1.jpg'},
    {name: "Peter", age: 26, id: 2, avatar: 'cat2.jpg'},
    {name: "Mary", age: 27, id: 3}
  ]);

  lastID = computed(() => {
    let lastUserID = 0;
    this.users().forEach( usr => lastUserID = Math.max( lastUserID, usr.id));
    return lastUserID;
  });

  private selectedUsr: User | undefined;

  addUser() {
    this.users.update( users => [...users, {name: `user ${this.lastID()+1}`, age: 28, id: this.lastID()+1}]);
  }

  delUser(user?: User) {
    user = user || this.selectedUsr;
    if (user) {
      this.users.update( users => users.filter( u => u.id !== user.id));
    }
  }

  delAll () {
    this.users.set([]);
    this.selectedUsr = undefined;
  }

  delUserById(id: number) {
    this.users.update( users => users.filter( u => u.id !== id));
  }

  usrSelected(selectedUsr: User | undefined) {
    this.selectedUsr = selectedUsr;
  }
}
