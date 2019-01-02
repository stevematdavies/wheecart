import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Product } from '../product/Product';
import { ProductIconService } from './../../services/product-icon.service';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: Product;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productIconService: ProductIconService) {}

  ngOnInit() {}

  onRemoveFromCart() {
    this.shoppingCartService.removeItem(this.item);
  }

  getIconForProduct(name: string) {
    return this.productIconService.getResource(name);
  }
}
