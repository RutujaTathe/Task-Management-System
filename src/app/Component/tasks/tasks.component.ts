import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({required:true}) userId!:string;
  @Input({ required: true }) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced feactures of angular and how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Build first Prototype',
      summary:"Build's first prototype of the online shop website",
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:'Prepare and describe and issue template which will helps with project management ',
      dueDate: '2024-02-31', 
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Create Project Plan',
      summary: 'Outline the milestones, goals, and deliverables for the upcoming project phase.',
      dueDate: '2024-03-05',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Update Documentation',
      summary: 'Revise and update the technical documentation to include recent changes.',
      dueDate: '2024-03-10',
    },
   
   
      
  ];

  get selectedUserTask(){
    return this.tasks.filter((task)=>task.userId===this.userId)
  }
}
