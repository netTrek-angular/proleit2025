import {Component, effect, inject, input, OnDestroy, output, signal, viewChild, viewChildren} from '@angular/core';
import {User} from '../user';
import {UserListItemComponent} from './user-list-item/user-list-item.component';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pl-user-list',
  imports: [
    UserListItemComponent
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements /*OnInit, AfterViewInit, */OnDestroy {

  private readonly router = inject(Router);

  ngOnDestroy(): void {
    this.firstElemEffRef.destroy();
    this.itemsEffRef.destroy();
  }
/*

  ngOnInit(): void {
    // console.log('on init', this.firstItem()?.user().name );
  }

  ngAfterViewInit(): void {
    // console.log('after view init', this.firstItem()?.user().name );
  }
*/

  firstItem = viewChild <UserListItemComponent>( UserListItemComponent );
  firstElemEffRef = effect( () => {
    console.log(this.firstItem()?.user().name );
  });
  items = viewChildren( UserListItemComponent);
  itemsEffRef = effect( () => {
    // console.log(this.items() );
  });
  readonly user$ = inject ( UserService );
  private readonly userEffRef = effect( () => {
    // kann nur passieren, wenn du den User Service eine automatische neu Selektierung stattfindet!
    if ( this.user$.selectedUsr() && this.user$.selectedUsr() !== this.selectedUser()) {
      this.selectUsr( this.user$.selectedUsr()! );
    }
  })

  users = input.required<User[]>()  ;
  userSelected = output<User | undefined>();
  selectedUser = signal<User | undefined>( undefined );

  selectUsr(user: User) {
    this.selectedUser.update( crr_selected => user === crr_selected ? undefined : user);
    this.userSelected.emit(user);
    if ( this.selectedUser() ) {
      this.router.navigate( ['/user/show', user.id] );  // [router-Link] im Code Nutzen
    } else {
      this.router.navigate( ['/user']   );
    }
  }


}
