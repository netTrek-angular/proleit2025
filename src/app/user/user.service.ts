import {inject, Injectable, signal} from '@angular/core';
import {User, UserSubset} from './user';
import {HttpClient} from '@angular/common/http';
import {BASE_URL} from '../app.config';
import {forkJoin} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint = 'users';
  private readonly baseUrl = inject( BASE_URL );
  private readonly url = `${this.baseUrl}/${this.endpoint}`;
  readonly http = inject( HttpClient );

  private _users = signal<User[]>([ ]);
  private _selectedUsr = signal<User | undefined>( undefined );

  get users () {
    return this._users.asReadonly();
  }

  get selectedUsr () {
    return this._selectedUsr.asReadonly();
  }

  constructor() {
    this.refreshUsrData();
  }

  refreshUsrData() {
    this.http.get<User[]>(this.url).subscribe(
      (users: User[]) => {
        this._users.set(users);
        if ( this.selectedUsr () ) {
          const selectedUsr = this.selectedUsr ();
          const foundedUsr = users.find( usr => usr.id === selectedUsr!.id );
          if ( foundedUsr )
            this.setSelectedUsr (foundedUsr);
          else
            this.setSelectedUsr (undefined) ;
        }
      }
    )
  }

  setSelectedUsr(selectedUsr: User | undefined) {
    this._selectedUsr.set(selectedUsr);
  }

  addUser() { //todo add usr: User
    const uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.http.post<User>( this.url,
        {
          name: `user ${uuid}`,
          age: 28,
          admin: true
        }
      ).subscribe( {
      next: (user: User) => { this.setSelectedUsr ( user ); console.log(user);},
      complete: () => this.refreshUsrData()
    })
  }

  delUser(user2Del: User) {
    this.delUserById(user2Del.id!);
  }

  delAll () {
    // this._users.set([]);

    // Create an RxJS zip of all delUser calls to delete all user records
    const userDeleteRequests = this.users().map(user =>
      this.http.delete(`${this.url}/${user.id}`)
    );

    // Trigger all HTTP delete requests
    forkJoin(userDeleteRequests).subscribe({
      complete: () => {
        this.refreshUsrData(); // Refresh the user data once all deletions are complete
        this.setSelectedUsr(undefined); // Clear the selected user
      }
    });
  }

  delUserById(id: string) {
    this.http.delete( `${this.url}/${id}asjjhgdjkahsgdjkhasgdkjhgasjhk` ).subscribe( {
      complete: () => this.refreshUsrData()
    })
  }

  updateUser(user: User) {
    this.http.put( `${this.url}/${user.id}`, user ).subscribe( {
      complete: () => this.refreshUsrData()
    })
  }

  patchUser(user: UserSubset) {
    this.http.patch( `${this.url}/${user.id}`, user ).subscribe( {
      complete: () => this.refreshUsrData()
    })
  }
}
