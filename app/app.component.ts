import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
  <h3>{{currentFocus}}</h3>
  <ul>
    <li [class]="priorityColor(currentTask)"(click)="isDone(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}<button (click)="editTask()">Edit</button></li>
  </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task [] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible Javascript group projects', 2),
    new Task('Add README files to last few Angular repos on Github', 2)
  ];

  editTask() {
    alert("Boo!");
  }

  priorityColor(currentTask){
    if (currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2){
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }

  isDone(clickedTask: Task) {
    if(clickedTask.done === true) {
      alert("Task done!");
    } else {
      alert("Not done! Get to work!");
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) { }
}
