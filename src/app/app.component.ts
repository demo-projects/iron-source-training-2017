import { Component } from '@angular/core';
import {TodosService} from './todos/services/todos.service';

@Component({
  selector: 'is-root',
  template: `      
    <is-todos></is-todos>
  `,
  styles: []
})
export class AppComponent {
  constructor(list: TodosService) {

  }
}
