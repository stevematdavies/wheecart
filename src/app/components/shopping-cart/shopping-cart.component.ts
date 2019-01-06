import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../product/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  shoppingCartItems: Product[];
  runningTotal: number;
  cartUpdateSub: null;
  cartTotalSub: null;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService) { }

  ngOnInit() {

    this.shoppingCartItems = this.shoppingCartService.getShoppingCart();
    this.runningTotal = this.shoppingCartService.getShoppingCartTotal();

    this.cartUpdateSub = this.eventService.shoppingCartUpdated
      .subscribe((cart: Product[]) => {
        this.shoppingCartItems = cart;
      });

    this.cartTotalSub = this.eventService.shoppingCartTotalUpdated
      .subscribe((total: number) => {
        this.runningTotal = total;
      });
  }

  ngOnDestroy() {
    this.cartUpdateSub =  null;
    this.cartTotalSub =  null;
  }
}
