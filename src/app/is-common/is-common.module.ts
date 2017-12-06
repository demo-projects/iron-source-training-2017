import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IsLowPipe} from './is-low.pipe';
import {LoggerService} from './logger.service';

@NgModule({
  imports     : [CommonModule],
  providers   : [LoggerService],
  declarations: [IsLowPipe],
  exports     : [IsLowPipe],
})
export class IsCommonModule {

  constructor(logger: LoggerService) {
    logger.setConsoleType(LoggerService.LOG);
  }
}
