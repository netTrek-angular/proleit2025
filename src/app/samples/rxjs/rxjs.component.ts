import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject, filter, fromEvent, map, Observable, of, Subject, take, tap} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {User} from '../../user/user';

@Component({
  selector: 'pl-rxjs',
  imports: [
    AsyncPipe
  ],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent implements OnInit{

  readonly http = inject( HttpClient );

  mySignal?: WritableSignal<number>;
  mySubject$?: BehaviorSubject<number>;

  ngOnInit(): void {
    // this.initOfSample()
    // this.initEventSample()
    // this.initSubject ();
    this.initHttpSample ();
  }

  private initHttpSample () {
    const myObservable$ = this.http.get<User[]>('http://localhost:3000/users');
    this.subscribe( myObservable$ )
    this.subscribe( this.http.post<User>(
      'http://localhost:3000/users',
      {name: 'Frank Zander', age: 47, avatar: 'cat2.jpg'}
    ) )

  }


  private initEventSample () {
    const myObservable$ =
      fromEvent<MouseEvent>( document, 'mousemove' ).pipe(
        map( event => event.clientX ),
        filter ( value => value > 250),
        // tap( value => console.log( 'rxjs tap', value )), // zum logen und effekten neben dem standard
        tap( value => this.mySignal?.set(value)), // zum logen und effekten neben dem standard
        tap( value => this.mySubject$?.next(value)), // zum logen und effekten neben dem standard
        take ( 10 )
      );
    this.subscribe( myObservable$ )
  }

  private initOfSample () {
    const myObservable$ = of ( 1, 2, 3 ).pipe(
      tap ( value => console.log( 'rxjs tap', value ))
    );
    // console.log( 'rxjs init', myObservable$ );
    const sub = this.subscribe(myObservable$, 'of sample');
    console.log( 'rxjs fertig', sub );
  }

  private subscribe<T> ( observable: Observable<T>, prefix = '' ) {
    return observable.subscribe(
      {
        next: ( value ) => console.log( `${prefix} rxjs next`, value ),
        error: ( error ) => console.log( `${prefix} rxjs error`, error ),
        complete: () => console.log( `${prefix} rxjs complete` )
      }
    );
  }

  private initSubject() {
    this.mySignal = signal( 1 );
    this.mySignal.set( 111 );
    // const mySubject$ = new Subject<number>();
    this.mySubject$ = new BehaviorSubject<number>(1);
    this.subscribe( this.mySubject$, 'sub 1' );
    this.mySubject$.next( 123 );
    this.subscribe( this.mySubject$, 'sub 2' );
  }
}
