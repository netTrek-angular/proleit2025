import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'pl-hello-world',
  template: '<h1>Hello World</h1>',
  styles: `h1 {
    color: red;
  }`,
  // encapsulation: ViewEncapsulation.None
  encapsulation: ViewEncapsulation.Emulated, /*default*/
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloWorldComponent {
}
