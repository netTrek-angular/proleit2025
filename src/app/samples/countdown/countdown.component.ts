import {Component, HostListener, OnDestroy} from '@angular/core';

@Component({
  selector: 'pl-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnDestroy {

  static readonly MODE_PROGRESS = 'progress';
  static readonly MODE_COUNTDOWN = 'countdown';


  percent = 0;
  private timerID: number | null = null;
  private mode: 'progress' | 'countdown'  = Math.random() > .5 ? CountdownComponent.MODE_COUNTDOWN : CountdownComponent.MODE_PROGRESS;
  jusify = 'left';

  constructor() {
    this.startTimer();
  }

  private startTimer () {
    if ( this.timerID ) {
      this.stopTimer()
    }
    if ( !this.percent || this.percent === 100 || this.percent === 0 ) {
      this.percent = this.mode === CountdownComponent.MODE_PROGRESS ? 0 : 100;
    }
    this.timerID = window.setInterval(() => {
      if ( this.mode === CountdownComponent.MODE_PROGRESS ) {
        this.incremtent();
      } else {
        this.decremtent();
      }
      this.jusify = this.percent > 10 ? 'right' : 'left';
    }, 100 )
  }

  @HostListener('click', ['$event'] )
  private toggleMode ( event: MouseEvent) {
    console.log(event);
    if ( this.timerID ) {
      this.stopTimer();
    } else {
      this.startTimer()
    }
  }

  private stopTimer () {
    if ( this.timerID ) {
      clearInterval(this.timerID);
      this.timerID = null;
    }
  }

  private incremtent( step = 50 ) {
    this.percent = Math.min( this.percent! + (100 / step), 100 );
    if ( this.percent === 100 ) {
      this.stopTimer();
    }
  }

  private decremtent(step = 50) {
    this.percent = Math.max( this.percent! - (100 / step), 0 );
    if ( this.percent === 0 ) {
      this.stopTimer();
    }
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
