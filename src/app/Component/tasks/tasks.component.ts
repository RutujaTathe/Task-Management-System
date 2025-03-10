import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Router } from '@angular/router';
import { NewTaskComponent } from '../new-task/new-task.component';
import { type NewTaskData } from '../new-task/new-task.model';
import { TasksServiceService } from '../../Service/tasks-service.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  providers:[TasksServiceService],
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask: boolean = false;
  
 constructor(private taskservice:TasksServiceService){

 }
  get selectedUserTask() {
    return this.taskservice.getUserTasks(this.userId);
  }
  onCompleteTask(id: string) {
    return this.taskservice.
  }
  onClickNewTask() {
    this.isAddingTask = true;
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTaskData) {
    
    this.isAddingTask = false;
  }
}
