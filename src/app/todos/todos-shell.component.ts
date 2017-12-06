import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'is-todos-shell',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class TodosShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
