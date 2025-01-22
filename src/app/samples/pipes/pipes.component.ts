import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe} from '@angular/common';
import {PrefixPipe} from './prefix.pipe';

@Component({
  selector: 'pl-pipes',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    DatePipe,
    PrefixPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  stringSample = 'Hello World';
  numberSample = 1.124999;
  dateSample = new Date();
}
