import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 class="app-title">
      Welcome to {{ title }}!
    </h1>  

    <todo-list-manager></todo-list-manager>
    `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
}
