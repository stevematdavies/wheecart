import { Component, OnInit } from '@angular/core';

import { Product } from '../product/Product';
import { EventService } from './../../services/event.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-totals-box',
  templateUrl: './totals-box.component.html',
  styleUrls: ['./totals-box.component.scss']
})
export class TotalsBoxComponent implements OnInit {

  isVisible: boolean;
  eventSub: null;
  cartSub: null;
  showSub: null;
  cartItemCount: number;
  cartPriceTotal: number;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService
    ) { }

  ngOnInit() {
    this.cartPriceTotal = this.shoppingCartService.getShoppingCartTotal();
    this.cartItemCount = this.shoppingCartService.getShoppingCart().length;

    this.eventSub = this.eventService.shoppingCartTotalUpdated
      .subscribe((total: number) => {
        this.cartPriceTotal = total;
        this.checkCountsAndClose();
      });

      this.cartSub = this.eventService.shoppingCartUpdated
    .subscribe((cart: Product[]) => {
      this.cartItemCount = cart.length;
      this.checkCountsAndClose();
    });

    this.showSub = this.eventService.toggleTotalsDialog
    .subscribe((flag: boolean) => {
       this.isVisible = flag;
    });

    this.checkCountsAndClose();

  }

 toggle() {
    this.eventService.toggleTotalsDialog.emit(!this.isVisible);
  }

  checkCountsAndClose() {
    if (this.cartPriceTotal === 0 || this.cartItemCount === 0) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }
  }

}
