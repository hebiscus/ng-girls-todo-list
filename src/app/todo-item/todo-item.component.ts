import { Component, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-todo-item',
  template: `
    <div class="todo-item">{{ item.title }}</div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;
}
