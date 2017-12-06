import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-todos',
  template: `
    <section class="todoapp">
      <is-todos-header></is-todos-header>
      <is-todos-list></is-todos-list>
      <is-todos-footer></is-todos-footer>
    </section>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
