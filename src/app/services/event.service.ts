import { EventEmitter, Injectable, Output } from '@angular/core';

import { Product } from '../components/product/Product';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() shoppingCartUpdated: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  @Output() shoppingCartTotalUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
}
