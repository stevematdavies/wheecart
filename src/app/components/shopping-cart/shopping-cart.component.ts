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

  items: Product[];

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService) { }

  ngOnInit() {
    this.items = this.shoppingCartService.getShoppingCart();
    this.eventService.shoppingCartUpdated
      .subscribe((cart: Product[]) => {
        this.items = cart;
      });
  }
}
