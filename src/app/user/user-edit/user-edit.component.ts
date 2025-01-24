import {Component, effect, inject, input, OnDestroy, signal} from '@angular/core';
import {User} from '../user';
import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'pl-user-edit',
  imports: [
    FormsModule,
  ],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})
export class UserEditComponent implements OnDestroy {
  private readonly $users = inject(UserService);
  // kommt über resolver
  user = input.required<User>();
  // erzeuge für jedes Imput Element ein signal - nicht zwingend
  name = signal<string>('asd');
  age = signal<number>(0);
  userEffect = effect( () => {
    this.name.set( this.user().name );
    this.age.set( this.user().age )
  })

  ngOnDestroy(): void {
    this.userEffect.destroy()
  }
  onSubmit(value: Partial<User>) {
    this.$users.patchUser( {...value, id: this.user().id! } );
  }

  /*
    onSubmit(value: User) {
    this.$users.updateUser( {...value, id: this.user().id! } );
  }
  */
}
