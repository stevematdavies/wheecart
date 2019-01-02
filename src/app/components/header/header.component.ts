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
  shoppingCartItemAddedSubscription: null;
  shoppingCartView  = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.shoppingCartItemCount = this.shoppingCartService.getShoppingCart().length;
    this.shoppingCartItemAddedSubscription = this.eventService.shoppingCartUpdated
    .subscribe((cart: Product[]) => {
      console.log('updating');
      this.shoppingCartItemCount = cart.length;
    });
    this.eventService.appModeChanged.subscribe((mode: string) => {
      this.shoppingCartView = mode === 'cart';
    });
  }

  ngOnDestroy() {
    this.shoppingCartItemAddedSubscription = null;
  }

  navigateTo(endpoint: string) {
    this.router.navigate([endpoint], { relativeTo: this.route });
    this.eventService.appModeChanged.emit(endpoint);
  }

}
