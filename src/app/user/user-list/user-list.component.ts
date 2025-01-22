import {
  AfterViewInit,
  Component,
  effect,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
  viewChild,
  viewChildren
} from '@angular/core';
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
export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {

  ngOnDestroy(): void {
    this.firstElemEffRef.destroy();
    this.itemsEffRef.destroy();
  }

  ngOnInit(): void {
    console.log('on init', this.firstItem()?.user().name );
  }

  ngAfterViewInit(): void {
    console.log('after view init', this.firstItem()?.user().name );
  }

  firstItem = viewChild <UserListItemComponent>( UserListItemComponent );
  firstElemEffRef = effect( () => {
    console.log(this.firstItem()?.user().name );
  });
  items = viewChildren( UserListItemComponent);
  itemsEffRef = effect( () => {
    console.log(this.items() );
  });

  users = input.required<User[]>()  ;
  userSelected = output<User | undefined>();
  selectedUser = signal<User | undefined>( undefined );

  selectUsr(user: User) {
    this.selectedUser.update( crr_selected => user === crr_selected ? undefined : user);
    this.userSelected.emit(user);
  }


}
