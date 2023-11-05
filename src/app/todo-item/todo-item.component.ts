import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-todo-item',
  template: `
    {{ item.title }}
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item;
}
