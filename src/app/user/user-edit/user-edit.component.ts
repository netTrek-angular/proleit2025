import {Component, input} from '@angular/core';
import {User} from '../user';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'pl-user-edit',
  imports: [
    JsonPipe
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent {
  user = input.required<User>();
}
