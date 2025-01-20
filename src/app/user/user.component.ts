import { Component } from '@angular/core';

@Component({
  selector: 'pl-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  name = "Saban Ünlü";

  chgName() {
    this.name = "Peter Müller";
  }
}
