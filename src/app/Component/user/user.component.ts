import {
  Component,
  computed,
  Input,
  signal,
  input,
  Output,
  EventEmitter,
  output,
} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users';
import {  type Users } from './user.model';
import { CardComponent } from "../../Shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) users!:{
    id:string;
    avatar:string;
    name:string;
  }
  @Input({required:true}) selected!:boolean;
  @Output() select = new EventEmitter<string>();
name: any;
  // select=output<string>();

  get imagePath() {
    return 'assets/users/users/' + this.users.avatar;
  }
  onClick() {
    this.select.emit(this.users.id);
  }
}
