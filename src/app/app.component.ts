import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloWorldComponent} from './hello-world.component';

@Component({
  selector: 'pl-root',
  imports: [
    RouterOutlet,
    HelloWorldComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proleit';
}
