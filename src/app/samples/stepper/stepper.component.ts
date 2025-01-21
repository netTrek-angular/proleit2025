import {Component, computed, effect, input, OnDestroy, OnInit, output, signal} from '@angular/core';

@Component({
  selector: 'pl-stepper',
  imports: [],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnDestroy, OnInit {

  valueChanged = output<number>()
  //#region
  name = input.required<string>( );
  // startValue = input<number>( 0 );
  startValue = input<number, number | string> ( 0, {
    transform: value => typeof value === 'string' ? parseInt( value, 10 ) : value
  } );
  currentStep = signal<number>( 0 );
  // currentStep = signal<number>( 0 );
  even = computed( () => this.currentStep() % 2 === 0 );
  //#endregion
  private stepEffectRef = effect( () => {
    // console.log( 'step changed', this.currentStep() );
    this.valueChanged.emit( this.currentStep() );
  });

  increment() {
    this.currentStep.update( step => step + 1);
  }

  decrement() {
    this.currentStep.update( step => step - 1);
  }

  reset() {
    this.currentStep.set( 0 );
  }

  ngOnInit() {
    this.currentStep.set( this.startValue () );
  }

  ngOnDestroy(): void {
    this.stepEffectRef.destroy();
  }
}
