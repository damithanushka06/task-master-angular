import { Injectable } from '@angular/core';
import {TaskDto} from "../dto/task-dto";

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: TaskDto[] = [];

  // Method to get all tasks
  getTasks() {
    return this.tasks;
  }

  // Method to add a new task
  addTask(task: TaskDto) {
    this.tasks.push(task);
  }

  // Method to delete a task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
