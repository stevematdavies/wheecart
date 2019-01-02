import { Component, OnDestroy, OnInit } from '@angular/core';

import { EventService } from './../../services/event.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';
import { Product } from './../product/Product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  shoppingCartItemCount: number;
  shoppingCartItemAddedSubscription: null;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService) {
  }

  ngOnInit() {
    this.shoppingCartItemCount = this.shoppingCartService.getShoppingCart().length;
    this.shoppingCartItemAddedSubscription = this.eventService.shoppingCartUpdated
    .subscribe((cart: Product[]) => {
      this.shoppingCartItemCount = cart.length;
    });
  }

  ngOnDestroy() {
    this.shoppingCartItemAddedSubscription = null;
  }

}
