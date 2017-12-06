import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IsLowPipe } from './is-low.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IsLowPipe],
  exports: [IsLowPipe],
})
export class IsCommonModule { }
