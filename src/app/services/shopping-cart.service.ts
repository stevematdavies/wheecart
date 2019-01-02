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

  @SessionStorage('shoppingCartTotal')
  public shoppingCartTotal: number;

  storeIdentifiers = {
    SHOPPING_CART: 'shoppingCart',
    SHOPPING_CART_TOTAL: 'shoppingCartTotal'
  };

  constructor(private sessStor: SessionStorageService, private eventService: EventService) {
  }

  ngOnInit() {
  }

  $store(key: string, value: any) {
    this.sessStor.store(key, value);
  }

  $get(key: string) {
    return this.sessStor.retrieve(key);
  }

  initStorage() {
    this.$store('shoppingCart', JSON.stringify([]));
    this.$store('shoppingCartTotal', 0);
    this.sessStor.observe('shoppingCart')
    .subscribe((updatedCart) => {
      this.eventService.shoppingCartUpdated.emit(JSON.parse(updatedCart));
    });
  }

  addItem(product: Product) {
    const cart = this.getShoppingCart();
    cart.unshift(product);
    this.$store('shoppingCart', JSON.stringify(cart));
    this.updateShoppingCartTotal(product.price, true);
  }

  removeItem(product: Product) {
    let cart = this.getShoppingCart();
    cart = _.remove(cart, (p: Product) => cart.indexOf(p));
    this.$store('shoppingCart', JSON.stringify(cart));
    this.updateShoppingCartTotal(product.price, false);
  }

  getShoppingCart() {
    return JSON.parse(this.$get('shoppingCart'));
  }

  updateShoppingCartTotal(price: number, operator: boolean) {
    const current = this.$get('shoppingCartTotal');
    const amount = operator ? current + price : current - price;
    this.$store('shoppingCartTotal', amount);
    this.eventService.shoppingCartTotalUpdated.emit(amount);
  }

  getShoppingCartTotal() {
    return this.$get('shoppingCartTotal');
  }

}
