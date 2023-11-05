import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-todo-item',
  template: `
    <div class="todo-item">
      {{ item.title }}

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
