import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HistoryComponent} from './history.component';

@NgModule({
  imports     : [CommonModule],
  declarations: [HistoryComponent],
  exports     : [HistoryComponent]
})
export class HistoryModule {
}
