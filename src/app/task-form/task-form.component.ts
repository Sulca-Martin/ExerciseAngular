import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<string>();
  taskTitle: string = '';

  onSubmit() {
    if (this.taskTitle.trim()) {
      this.addTask.emit(this.taskTitle);
      this.taskTitle = '';
    }
  }
}
