import {Component, HostBinding, HostListener, input, output} from '@angular/core';
import {User} from '../../user';

@Component({
  selector: 'pl-user-list-item',
  imports: [],
  templateUrl: './user-list-item.component.html',
  styleUrl: './user-list-item.component.scss'
})
export class UserListItemComponent {

  doSelect = output<User>()
  user = input.required<User>() ;
  selected = input( false, {
    transform: (value: boolean | string) => typeof value === 'string' ? (value.trim().toLowerCase() === 'true' || value.trim() === '') : value
  } );

  @HostBinding('class.selected') get isSelected () {
    return this.selected ();
  }

  @HostListener('click') onClick () {
    this.doSelect.emit( this.user() )
  }
}
