
import { Component, OnInit } from '@angular/core';
import { Task } from './model/todo'; // Import the Task model or interface
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  taskToEdit: Task | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
    this.fetchTasks();
  }

  fetchTasks(): void {
    
    this.tasks = [];
  }

  editTask(task: Task): void {
    this.taskToEdit = task;
  }

  cancelEdit(): void {
    this.taskToEdit = null;
  }

  updateTask(task: Task): void {
    
    console.log('Task updated:', task);
    this.taskToEdit = null;
  }

  removeTask(task: Task): void {
    const taskIndex = this.tasks.indexOf(task);
    if (taskIndex > -1) {
      this.tasks.splice(taskIndex, 1);
    }
  }
  addTask(): void {
    
    const newTask: Task = {
      title: 'New Task',
      description: '',
      dueDate: new Date(),
      priority: 'Medium',
      status: 'Pending'
    };
    this.tasks.push(newTask);
    this.taskToEdit = newTask;
  }
  sortByPriority(): void {
    
    const priorityMap: { [key: string]: number } = { 'Low': 0, 'Medium': 1, 'High': 2 };
    this.tasks.sort((a, b) => {
      const priorityA = priorityMap[a.priority];
      const priorityB = priorityMap[b.priority];
      return priorityB - priorityA;
    });
  }
}
