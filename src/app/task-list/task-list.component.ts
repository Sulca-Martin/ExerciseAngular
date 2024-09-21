import { Component } from '@angular/core';
import { ITask } from '../models/ITask';
import { Task } from '../models/Task';
import { NgFor, NgIf } from '@angular/common';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgIf, NgFor, TaskFormComponent, TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: ITask[] = [];
  nextId: number = 1;

  addTask(title: string) {
    const newTask = new Task(this.nextId++, title);
    this.tasks.push(newTask);
  }

  toggleTaskCompletion(id: number) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
