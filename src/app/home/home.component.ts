import {Component, input} from '@angular/core';

@Component({
  selector: 'pl-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  haveFun = input.required<string>();
}
