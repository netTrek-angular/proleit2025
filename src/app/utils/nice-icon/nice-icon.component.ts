import {Component, signal} from '@angular/core';

@Component({
  selector: 'pl-nice-icon',
  imports: [],
  templateUrl: './nice-icon.component.html',
  styleUrl: './nice-icon.component.scss'
})
export class NiceIconComponent {
  color = signal('red');
}
