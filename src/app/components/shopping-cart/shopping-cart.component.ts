import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../product/Product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartItems: Product[];
  runningTotal: number;
  totalsBoxVisisble = true;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService) { }

  ngOnInit() {

    this.shoppingCartItems = this.shoppingCartService.getShoppingCart();
    this.runningTotal = this.shoppingCartService.getShoppingCartTotal();

    this.eventService.shoppingCartUpdated
      .subscribe((cart: Product[]) => {
        this.shoppingCartItems = cart;
      });

    this.eventService.shoppingCartTotalUpdated
      .subscribe((total: number) => {
        this.runningTotal = total;
      });
  }

  getRunningTotal() {
    return this.shoppingCartService.getShoppingCartTotal();
  }

  closeTotalsBox() {
    this.totalsBoxVisisble = false;
  }
}
