import {Component, Input} from '@angular/core';
import {Item} from '../types/item';

@Component({
  selector: 'is-todos-list',
  template: `
    <section class="main">
      <input class="toggle-all"
             type="checkbox">
      <ul class="todo-list">
        <is-todos-item *ngFor="let i of items" 
                       [item]="i"></is-todos-item>
      </ul>
    </section>
  `,
  styles: []
})
export class TodosListComponent  {

  @Input() items: Item[];
}
