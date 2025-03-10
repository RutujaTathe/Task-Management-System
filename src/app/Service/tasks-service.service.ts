import { Injectable } from '@angular/core';
import { type NewTaskData } from '../Component/new-task/new-task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  private tasks = [
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
      summary: "Build's first prototype of the online shop website",
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe and issue template which will helps with project management ',
      dueDate: '2024-02-31',
    },
    {
      id: 't4',
      userId: 'u4',
      title: 'Create Project Plan',
      summary:
        'Outline the milestones, goals, and deliverables for the upcoming project phase.',
      dueDate: '2024-03-05',
    },
    {
      id: 't5',
      userId: 'u5',
      title: 'Update Documentation',
      summary:
        'Revise and update the technical documentation to include recent changes.',
      dueDate: '2024-03-10',
    },
    {
      id: 't6',
      userId: 'u6',
      title: 'Design Mockups',
      summary:
        'Create mockups for the new product features based on the design requirements.',
      dueDate: '2024-03-15',
    },
    {
      id: 't7',
      userId: 'u7',
      title: 'Optimize Database',
      summary:
        'Analyze and optimize database queries for improved performance.',
      dueDate: '2024-03-20',
    },
    {
      id: 't8',
      userId: 'u8',
      title: 'Prepare Team Presentation',
      summary:
        'Develop a presentation summarizing the team’s progress and upcoming goals.',
      dueDate: '2024-03-25',
    },
    {
      id: 't9',
      userId: 'u9',
      title: 'Client Feedback Review',
      summary:
        'Gather and review feedback from clients to identify areas for improvement.',
      dueDate: '2024-03-30',
    },
  ];
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }
  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
