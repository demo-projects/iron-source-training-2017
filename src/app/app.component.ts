import { Component } from '@angular/core';

@Component({
  selector: 'is-root',
  template: `      
    <a routerLink="/">login</a>
    <a routerLink="list">list</a>
    <a routerLink="history">history</a>
    
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
