import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../models/ITask';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: ITask;
  @Output() toggleCompleted = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  onToggle() {
    this.toggleCompleted.emit(this.task.id);
  }

  onDelete() {
    this.deleteTask.emit(this.task.id);
  }
}
