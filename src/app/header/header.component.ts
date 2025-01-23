import {Component, inject} from '@angular/core';
import {UserService} from '../user/user.service';

@Component({
  selector: 'pl-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly $user = inject( UserService );

}
