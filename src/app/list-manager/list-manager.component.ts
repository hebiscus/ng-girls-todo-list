import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/TodoListService';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-list-manager',
  template: `
    <div class="todo-app">
      <todo-input-button-unit (submit)="addItem($event)"></todo-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <todo-todo-item [item]="todoItem"></todo-todo-item>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
  }
}
