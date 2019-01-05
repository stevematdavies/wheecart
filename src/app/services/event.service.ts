import { EventEmitter, Injectable, Output } from '@angular/core';

import { Product } from '../components/product/Product';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  @Output() shoppingCartUpdated: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  @Output() shoppingCartTotalUpdated: EventEmitter<number> = new EventEmitter<number>();
  @Output() itemAddedToCart: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemRemovedFromCart: EventEmitter<string> = new EventEmitter<string>();
  @Output() appModeChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() toggleTotalsDialog: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
