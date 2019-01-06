import { Component, OnDestroy, OnInit } from '@angular/core';

import { Product } from '../product/Product';
import { DataService } from './../../services/data.service';
import { EventService } from './../../services/event.service';
import { ShoppingCartService } from './../../services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[];
  cartSub: null;
  cartItemsCount: number;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private dataService: DataService,
    private eventService: EventService) { }

  ngOnInit() {
    this. cartItemsCount = this.shoppingCartService.getShoppingCart().length;
    this.eventService.appModeChanged.emit('products');
    this.products = this.dataService.getAllProducts();

    this.cartSub = this.eventService.shoppingCartUpdated
      .subscribe((cart: Product[]) => {
        this.cartItemsCount = cart.length;
      });
  }

  ngOnDestroy() {
    this.cartSub = null;
  }
}
