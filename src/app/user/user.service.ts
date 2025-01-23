import {computed, Injectable, signal} from '@angular/core';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = signal<User[]>([
    {name: "Saban", age: 25, id: 1, avatar: 'cat1.jpg'},
    {name: "Peter", age: 26, id: 2, avatar: 'cat2.jpg'},
    {name: "Mary", age: 27, id: 3}
  ]);

  private lastID = computed(() => {
    let lastUserID = 0;
    this._users().forEach( usr => lastUserID = Math.max( lastUserID, usr.id));
    return lastUserID;
  });

  private _selectedUsr = signal<User | undefined>( undefined );

  get users () {
    return this._users.asReadonly();
  }

  get selectedUsr () {
    return this._selectedUsr.asReadonly();
  }

  setSelectedUsr(selectedUsr: User | undefined) {
    this._selectedUsr.set(selectedUsr);
  }

  addUser() {
    this._users.update( users =>
      [...users,
        {
          name: `user ${this.lastID()+1}`,
          age: 28 + this.lastID(),
          id: this.lastID()+1,
          avatar: `https://placecats.com/${this.lastID()}/${this.lastID()}`
        }
      ]);
  }

  delUser(user2Del: User) {
    this._users.update( users => users.filter( u => u.id !== user2Del.id));
    if ( this._selectedUsr()?.id === user2Del.id )
      this.setSelectedUsr (undefined) ;
  }

  delAll () {
    this._users.set([]);
    this.setSelectedUsr (undefined) ;
  }

  delUserById(id: number) {
    this._users.update( users => users.filter( u => u.id !== id));
    if ( this._selectedUsr()?.id === id )
      this.setSelectedUsr (undefined) ;
  }
}
