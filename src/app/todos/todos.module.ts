import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosHeaderComponent } from './todos-header.component';
import { TodosListComponent } from './todos-list.component';
import { TodosFooterComponent } from './todos-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodosComponent, TodosHeaderComponent, TodosListComponent, TodosFooterComponent],
  exports: [TodosComponent]
})
export class TodosModule { }
