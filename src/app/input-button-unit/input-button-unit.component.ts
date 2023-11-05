import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input  [value]="title"
            (keyup)="changeTitle(getInputValue($event))">
    <button (click)="changeTitle('Button Clicked!')">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';           

  constructor() { }         
  
  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }

  getInputValue(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
