import { Component } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
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
export class ListManagerComponent {
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
    todoListService.getTodoList();
  }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
