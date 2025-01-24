import {Component, inject} from '@angular/core';
import {UserService} from '../user/user.service';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'pl-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  readonly $user = inject( UserService );

}
