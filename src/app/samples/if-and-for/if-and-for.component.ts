import {Component, signal} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {User} from '../../user/user';

@Component({
  selector: 'pl-if-and-for',
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './if-and-for.component.html',
  styleUrl: './if-and-for.component.scss'
})
export class IfAndForComponent {
  showImg = signal(true);

  users = signal<User[]>([
    {name: "Saban", age: 25, id: '1', avatar: 'cat1.jpg'},
    {name: "Peter", age: 26, id: '2', avatar: 'cat2.jpg'},
    {name: "Mary", age: 27, id: '3'}
  ]);

  toggleImg() {
    this.showImg.update( show => !show )
  }
}
