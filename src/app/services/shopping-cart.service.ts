import { Injectable, OnInit } from '@angular/core';
import _ from 'lodash';
import { LocalStorageService, SessionStorage } from 'ngx-webstorage';

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

  constructor(
    private eventService: EventService,
    private lclStorage: LocalStorageService) {
  }

  ngOnInit() {
  }

  $store(key: string, value: any) {
    this.lclStorage.store(key, value);
  }

  $get(key: string) {
    return this.lclStorage.retrieve(key);
  }

  initStorage() {
    this.$store('shoppingCart', JSON.stringify([]));
    this.$store('shoppingCartTotal', 0);
    this.lclStorage.observe('shoppingCart')
    .subscribe((updatedCart) => {
      this.eventService.shoppingCartUpdated.emit(JSON.parse(updatedCart));
    });
  }

  addItem(product: Product) {
    const cart = this.getShoppingCart();
    cart.unshift(product);
    this.$store('shoppingCart', JSON.stringify(cart));
    this.eventService.shoppingCartUpdated.emit(cart);
    this.eventService.itemAddedToCart.emit(product.name);
    this.updateShoppingCartTotal(product.price, true);
  }

  removeItem(product: Product) {
    let cart = this.getShoppingCart();
    cart = _.remove(cart, (p: Product) => cart.indexOf(p));
    this.$store('shoppingCart', JSON.stringify(cart));
    this.updateShoppingCartTotal(product.price, false);
    this.eventService.shoppingCartUpdated.emit(this.getShoppingCart());
    this.eventService.itemRemovedFromCart.emit(product.name);
  }

  getShoppingCart() {
    return JSON.parse(this.$get('shoppingCart'));
  }

  updateShoppingCartTotal(price: number, operator: boolean) {
    const current = this.$get('shoppingCartTotal');
    let amount = 0;
    if (!(this.getShoppingCart().length === 0)) {
      amount = operator ? current + price : current - price;
    }
    this.$store('shoppingCartTotal', amount);
    this.eventService.shoppingCartTotalUpdated.emit(amount);
  }

  getShoppingCartTotal() {
    return this.$get('shoppingCartTotal');
  }

}
