import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>
      Welcome to {{ title }}!
    </h1>  

    <todo-input-button-unit></todo-input-button-unit>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
}
