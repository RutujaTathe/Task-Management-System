import { Component, input } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Shared/header/header.component';
import { UserComponent } from './Component/user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './Component/tasks/tasks.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  users = DUMMY_USERS;
  selectedUserId?:string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string) {
    console.log('Selected user with id' + id);
    this.selectedUserId = id;
  }
}
