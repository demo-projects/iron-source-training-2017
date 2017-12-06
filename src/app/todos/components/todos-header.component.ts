import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'is-todos-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
             (keydown.enter)="itemAdd.emit($event.target.value)"
             placeholder="What needs to be done?"
             autofocus>
    </header>
  `,
  styles: []
})
export class TodosHeaderComponent  {

  @Output() itemAdd = new EventEmitter();

}
