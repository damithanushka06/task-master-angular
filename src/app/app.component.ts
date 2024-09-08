import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {TaskService} from "../service/task-service";
import {TaskDto} from "../dto/task-dto";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  taskTitle: string = '';
  taskDescription: string = '';
  tasks: TaskDto[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onAddTask() {
    const newTask = new TaskDto(this.taskTitle, this.taskDescription);
    newTask.title = "title" + Math.random();
    this.taskService.addTask(newTask);
    this.taskTitle = '';
    this.taskDescription = '';
  }

  onDeleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
}
