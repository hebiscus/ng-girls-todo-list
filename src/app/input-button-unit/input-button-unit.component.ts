import { Component } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent {
  title = 'Hello World';
}
