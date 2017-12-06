import {Injectable} from '@angular/core';
import {Item} from '../todos/types/item';

@Injectable()
export class LoggerService {

  static readonly LOG   = "log";
  static readonly TABLE = "TABLE";

  private logType: string;

  public setConsoleType(type: string) {
    this.logType = type;
  }

  printTable(item: Item) {
    console[this.logType](item);
  }

}
