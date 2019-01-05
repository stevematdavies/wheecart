import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
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
  addedProductName: string;
  deletedProductName: string;
  totalsDialogIsVisible = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    public breakpointObserver: BreakpointObserver) {
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
      .subscribe((name: string) => {
        this.addedProductName = name;
        this.itemAdded = true;
        setTimeout(() => {
          this.itemAdded = false;
        }, 1000);
      });

    this.itemRemovedSub = this.eventService.itemRemovedFromCart
      .subscribe((name: string) => {
        this.deletedProductName = name;
        this.itemRemoved = true;
        setTimeout(() => {
          this.itemRemoved = false;
        }, 1000);
    });

    this.responiveObserver();
  }

  responiveObserver() {
    this.breakpointObserver
    .observe(['(max-width: 800px)'])
        .subscribe((state: BreakpointState) => {
          this.validateView();
        });
  }

  validateView() {
    this.shoppingCartView = this.shoppingCartView;
  }



  ngOnDestroy() {
    this.shoppingCartSub = null;
    this.appModeSub = null;
    this.itemAddedSub = null;
    this.itemRemovedSub = null;
  }

  navigate(endpoint: string) {
    this.router.navigate([endpoint], { relativeTo: this.route });
    this.eventService.appModeChanged.emit(endpoint);
  }

  showTotalsDialog(event: any) {
    event.preventDefault();
    this.eventService.toggleTotalsDialog.emit(true);
  }

}
