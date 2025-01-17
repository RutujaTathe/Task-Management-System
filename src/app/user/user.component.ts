import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomindex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  selectuser = DUMMY_USERS[randomindex];
  get imagePath() {
    //this property useful for accessing property inside our class
    return 'assets/users/users/' + this.selectuser.avatar;
  }
  onClick() {
    console.log('button clicked');
  }
}
