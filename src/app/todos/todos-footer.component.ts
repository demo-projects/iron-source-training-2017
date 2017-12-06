import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-todos-footer',
  template: `
    <footer class="footer">
      <span class="todo-count"><strong>0</strong> items left</span>
      <button class="clear-completed">Clear completed
      </button>
    </footer>
  `,
  styles: []
})
export class TodosFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
