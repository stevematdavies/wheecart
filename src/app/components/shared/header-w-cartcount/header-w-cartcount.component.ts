import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

import { Product } from '../../product/Product';
import { ShoppingCartService } from './../../../services/shopping-cart.service';

@Component({
  selector: 'app-header-w-cartcount',
  templateUrl: './header-w-cartcount.component.html',
  styleUrls: ['./header-w-cartcount.component.scss']
})
export class HeaderWCartcountComponent implements OnInit, OnDestroy {

  @Input() show: boolean;
  @Input() showCount: boolean;
  @Input() logoSubText: string;
  cartSub: null;
  cartItemsCount: number;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartItemsCount = this.shoppingCartService.getShoppingCart().length;
    this.cartSub = this.eventService.shoppingCartUpdated
    .subscribe((cart: Product[]) => {
      this.cartItemsCount = cart.length;
    });
  }

  navigateTo(endpoint: string) {
    this.router.navigate([endpoint], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.cartSub = null;
  }

}
