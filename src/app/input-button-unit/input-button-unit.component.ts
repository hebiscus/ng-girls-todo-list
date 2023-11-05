import { Component, OnInit } from '@angular/core';

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
export class InputButtonUnitComponent implements OnInit {
  ngOnInit(): void {
  }
  title = 'Hello World';

  constructor() { 
    this.changeTitle('My First Angular App');
  }

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }
}
