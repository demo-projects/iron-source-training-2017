import {Item} from '../types/item';

export class TodosService {

  private _items: Item[];

  constructor(){
    this._items = [];
  }

  get items(): Item[] {
    return this._items;
  }

  addItem(title: string): void {
    this._items.push(new Item(title));
  }

}

