import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input-button-unit',
  template: `
    <input  #inputElementRef
            [value]="title">
    <button (click)="submitValue(inputElementRef.value)">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';           

  constructor() { }         
  
  ngOnInit(): void {
  }

  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }

}
