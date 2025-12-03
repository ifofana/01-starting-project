import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // @Input({required: true}) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string; //This will marks this object as settable from outside the component
  // @Input({required: true}) name!: string;

  // avatar = input.required<string>();
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  //select = output<string>(); //This is relatively new syntax for output event emitter

  // imagePath = computed(() => {
  //   return `assets/users/` + this.avatar();
  // });

  get imagePath() {
    return `assets/users/` + this.user.avatar;//this.avatar;
  }

  onSelectUser() {
    this.select.emit(/*this.id*/ this.user.id);
  }
}