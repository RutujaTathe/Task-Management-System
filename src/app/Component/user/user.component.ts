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
interface Users {
    id: string;
    avatar: string;
    name: string;
  }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) users!:{
    id:string;
    avatar:string;
    name:string;
  }
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
