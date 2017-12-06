import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoggerService} from '../../is-common/logger.service';
import {Item} from '../types/item';

@Injectable()
export class TodosService {

  private _items: Item[];
  private _logger: LoggerService;

  constructor(logger: LoggerService, http: HttpClient){
    this._logger = logger;
    this._items = [];

    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(res => res.json())
    //     .then( (items => this._items = items );

    const headers = new HttpHeaders().append('xxxx','xxxxx');

    // basic http call
    http.get<Item[]>('https://jsonplaceholder.typicode.com/todos', { headers })
        .subscribe(result => this._items = result);

  }

  get items(): Item[] {
    return this._items;
  }

  addItem(title: string): void {
    const item = new Item(title);
    this._items.push(item);
    this._logger.printTable(item);
  }
}

