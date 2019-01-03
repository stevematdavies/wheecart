import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  shoppingCartSub: null;
  appModeSub: null;
  itemAddedSub: null;
  itemRemovedSub: null;
  shoppingCartView  = false;
  itemAdded = false;
  itemRemoved = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.shoppingCartItemCount = this.shoppingCartService.getShoppingCart().length;

    this.shoppingCartSub = this.eventService.shoppingCartUpdated
    .subscribe((cart: Product[]) => {
      this.shoppingCartItemCount = cart.length;
    });

    this.appModeSub = this.eventService.appModeChanged.subscribe((mode: string) => {
      this.shoppingCartView = mode === 'cart';
    });

    this.itemAddedSub = this.eventService.itemAddedToCart
      .subscribe(() => {
        this.itemAdded = true;
        setTimeout(() => {
          this.itemAdded = false;
        }, 1000);
      });

    this.itemRemovedSub = this.eventService.itemRemovedFromCart
      .subscribe(() => {
        this.itemRemoved = true;
        setTimeout(() => {
          this.itemRemoved = false;
        }, 1000);
    });
  }

  ngOnDestroy() {
    this.shoppingCartSub = null;
    this.appModeSub = null;
    this.itemAddedSub = null;
    this.itemRemovedSub = null;
  }

  navigateTo(endpoint: string) {
    this.router.navigate([endpoint], { relativeTo: this.route });
    this.eventService.appModeChanged.emit(endpoint);
  }

}
