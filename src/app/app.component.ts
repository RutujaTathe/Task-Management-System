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
  users = DUMMY_USERS;
  selectedUsedId?:string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUsedId)!;
  }

  onSelectUser(id: string) {
    console.log('Selected user with id' + id);
    this.selectedUsedId = id;
  }
}
