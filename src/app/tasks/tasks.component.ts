import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  //private tasksService = new TasksService();//This approach is only for learning purposes. In a real app, use DI to inject the service.

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }//This is the correct way to use services in Angular. DI (instead of manual instantiation).

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {    
    this.isAddingTask = true;
  }

  onCloseAddTask() {    
    this.isAddingTask = false;
  }
}
