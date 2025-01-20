import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HelloWorldComponent} from './hello-world.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';

@Component({
  selector: 'pl-root',
  imports: [
    RouterOutlet,
    HelloWorldComponent,
    HeaderComponent,
    UserComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proleit';
}
