import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'todo-todo-item',
  template: `
    <div class="todo-item">
      <div>
        <input type="checkbox"
           class="todo-checkbox"
           (click)="completeItem()"
           [checked]="item.completed"/>
      </div>
      <span class="todo-title" [ngClass]="{'todo-complete': item.completed}">
        {{ item.title }}
      </span>

      <button class="btn btn-red" (click)="removeItem()">
        remove
      </button>
    </div>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
    
  }
  // put this method below ngOnInit
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }
}
