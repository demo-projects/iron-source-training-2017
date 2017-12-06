import {Component, Input} from '@angular/core';
import {Item} from '../types/item';


@Component({
  selector: 'is-todos-item',
  template: `
    <li [ngClass]="{ editing: flag, completed: item.completed }">
      <div class="view">
        <input class="toggle"
               [checked]="item.completed"
               type="checkbox">
        <label (dblclick)="flag = true">{{ item.title | isLow:'!!' }} created: {{ item.created | date }}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit">
    </li>
  `,
  styles: []
})
export class TodosItemComponent  {

  @Input() item: Item;

}
