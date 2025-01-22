import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import {HelloWorldComponent} from './hello-world.component';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {NiceButtonComponent} from './utils/nice-button/nice-button.component';
import {NiceIconComponent} from './utils/nice-icon/nice-icon.component';
import {IfAndForComponent} from './samples/if-and-for/if-and-for.component';
import {StepperComponent} from './samples/stepper/stepper.component';
import {AdminOnlyDirective} from './utils/admin-only.directive';
import {DangerDirective} from './utils/danger.directive';
/*
import {BindingsComponent} from './samples/bindings/bindings.component';
import {CountdownComponent} from './samples/countdown/countdown.component';
*/
// import {StepperComponent} from './samples/stepper/stepper.component';

@Component({
  selector: 'pl-root',
  imports: [
    RouterOutlet,
    // HelloWorldComponent,
    HeaderComponent,
    UserComponent,
    NiceButtonComponent,
    NiceIconComponent,
    IfAndForComponent,
    // BindingsComponent,
    // CountdownComponent,
    StepperComponent,
    AdminOnlyDirective,
    DangerDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proleit';

/*  logNewVal(stepperVal: number) {
    console.log('new stepper value: ' + stepperVal);
  }*/
  doDangerStuf() {
    console.log('doing danger stuff');
  }
}
