import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { DataService } from './../../services/data.service';
import { EventService } from './../../services/event.service';
import { Product } from './../product/Product';

@Component({
  selector: 'app-solo-view',
  templateUrl: './solo-view.component.html',
  styleUrls: ['./solo-view.component.scss']
})
export class SoloViewComponent implements OnInit, OnDestroy {

  constructor(
    private eventService: EventService,
    private shoppingCartService: ShoppingCartService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  product: Product;
  productError = false;
  cartItemsCount: number;
  routerSub: Subscription;
  cartSub: null;
  viewMode: string;

  ngOnInit() {

    this.routerSub = this.route.params
      .subscribe((params: any) => {
        const id = +params['id'];
        const mode = params['mode'];
        this.getSelectedProduct(id);
        this.setViewMode(mode);
      });

      this.cartSub = this.eventService.shoppingCartUpdated
        .subscribe((cart: Product[]) => {
          this.cartItemsCount = cart.length;
      });

      this.cartItemsCount = this.shoppingCartService.getShoppingCart().length;
  }

  getSelectedProduct(id: number) {
      this.product = this.dataService.getProduct(id);
      this.productError = !(!!this.product);
  }

  setViewMode(m: string) {
    this.viewMode = m === 'c' ? 'cart' : 'product';
  }

  ngOnDestroy() {
    this.routerSub = null;
    this.cartSub = null;
  }

  navigateTo(endpoint: string) {
    this.router.navigate([endpoint], { relativeTo: this.route });
  }
}
