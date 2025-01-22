import {AfterContentInit, Component, contentChild, contentChildren, effect} from '@angular/core';
import {NiceIconComponent} from '../nice-icon/nice-icon.component';

@Component({
  selector: 'pl-nice-button',
  imports: [],
  templateUrl: './nice-button.component.html',
  styleUrl: './nice-button.component.scss'
})
export class NiceButtonComponent implements AfterContentInit {
  // contentChild & contentChildren - nur wenn es im Template auch ein ng-content gibt
  icon = contentChild.required( NiceIconComponent );
  icons = contentChildren( NiceIconComponent );

  // iconEffRef = effect( () => console.log( this.icon () ) );
  ngAfterContentInit(): void {
      this.icon().color.set( 'green' );
      console.log( this.icons() );
  }
}
