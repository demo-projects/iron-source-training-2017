import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IsCommonModule} from '../is-common/is-common.module';
import {TodosFooterComponent} from './components/todos-footer.component';
import {TodosHeaderComponent} from './components/todos-header.component';
import {TodosItemComponent} from './components/todos-item.component';
import {TodosListComponent} from './components/todos-list.component';
import {TodosService} from './services/todos.service';
import {TodosComponent} from './todos.component';
import { TodosShellComponent } from './todos-shell.component';

const routes: Routes = [
  {path: '', component: TodosComponent}
];

@NgModule({
  imports     : [
    CommonModule,
    IsCommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers   : [TodosService],
  declarations: [TodosComponent, TodosHeaderComponent, TodosListComponent, TodosFooterComponent, TodosItemComponent, TodosShellComponent],
  exports     : [TodosShellComponent]
})
export class TodosModule {
}
