import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {IsCommonModule} from '../is-common/is-common.module';
import {TodosFooterComponent} from './components/todos-footer.component';
import {TodosHeaderComponent} from './components/todos-header.component';
import {TodosItemComponent} from './components/todos-item.component';
import {TodosListComponent} from './components/todos-list.component';
import {TodosService} from './services/todos.service';
import {TodosComponent} from './todos.component';


@NgModule({
  imports     : [CommonModule, IsCommonModule, HttpClientModule],
  providers   : [TodosService],
  declarations: [TodosComponent, TodosHeaderComponent, TodosListComponent, TodosFooterComponent, TodosItemComponent],
  exports     : [TodosComponent]
})
export class TodosModule {
}
