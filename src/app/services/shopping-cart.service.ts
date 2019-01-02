import { Injectable, OnInit } from '@angular/core';
import _ from 'lodash';
import { SessionStorage, SessionStorageService } from 'ngx-webstorage';

import { Product } from './../components/product/Product';
import { EventService } from './event.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService implements OnInit {

  @SessionStorage('shoppingCart')
  public shoppingCart: Product[];

  constructor(private sessStor: SessionStorageService, private eventService: EventService) {
  }

  ngOnInit() {
  }

  initStorage() {
    this.sessStor.store('shoppingCart', JSON.stringify([]));
    this.sessStor.observe('shoppingCart')
    .subscribe((updatedCart) => {
      this.eventService.shoppingCartUpdated.emit(JSON.parse(updatedCart));
    });
  }

  addItem(product: Product) {
    const cart = this.getShoppingCart();
    cart.unshift(product);
    this.sessStor.store('shoppingCart', JSON.stringify(cart));
  }

  removeItem(product: Product) {
    let cart = this.getShoppingCart();
    cart = _.remove(cart, (p: Product) => cart.indexOf(p));
    this.sessStor.store('shoppingCart', JSON.stringify(cart));
  }

  getShoppingCart() {
    return JSON.parse(this.sessStor.retrieve('shoppingCart'));
  }

}
