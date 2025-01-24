import {Component, input} from '@angular/core';

@Component({
  selector: 'pl-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  id = input.required<number | string> ();
}
