import { Component, OnInit } from '@angular/core';
import {TodosService} from './services/todos.service';

@Component({
  selector: 'is-todos',
  providers: [TodosService],
  template: `
    <section class="todoapp">
      <is-todos-header (itemAdd)="list.addItem($event)" ></is-todos-header>
      <is-todos-list [items]="list.items"></is-todos-list>
      <is-todos-footer></is-todos-footer>
    </section>
  `
})
export class TodosComponent {

  public list: TodosService;

  constructor(list: TodosService) {
      this.list = list;
  }

}
