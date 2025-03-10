import {
  Component,
  EventEmitter,
  Input,
  Output,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from './new-task.model';
import { TasksServiceService } from '../../Service/tasks-service.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  // enteredTitle=signal('');
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  constructor(private taskService: TasksServiceService) {}
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
    this.close.emit();
  }
}
