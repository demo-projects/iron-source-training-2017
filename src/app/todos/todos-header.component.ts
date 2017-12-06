import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-todos-header',
  template: `
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
             placeholder="What needs to be done?"
             autofocus>
    </header>
  `,
  styles: []
})
export class TodosHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
