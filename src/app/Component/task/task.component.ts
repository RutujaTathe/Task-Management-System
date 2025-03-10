import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../Shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksServiceService } from '../../Service/tasks-service.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(private taskService: TasksServiceService) {}
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
  }
}
