import {Component, computed, inject, input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserService} from '../user.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'pl-user-detail',
  imports: [
    RouterLink,
    JsonPipe
  ],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  private readonly $users = inject(UserService);

  id = input.required<number | string> ();

  user = computed( () => this.$users.getUserById( this.id().toString() ) );

}
