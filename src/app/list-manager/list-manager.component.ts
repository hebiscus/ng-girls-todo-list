import { Component } from '@angular/core';
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
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
