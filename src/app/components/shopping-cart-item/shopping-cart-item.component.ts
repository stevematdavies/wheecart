import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Product } from '../product/Product';
import { EventService } from './../../services/event.service';
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
    private productIconService: ProductIconService,
    private eventService: EventService) {}

  ngOnInit() {}

  onRemoveFromCart() {
    this.shoppingCartService.removeItem(this.item);
  }

  getIconForProduct(name: string) {
    return this.productIconService.getResource(name);
  }

  increaseQuantity() {
    this.item.quantity++;
    const incrementor = this.item.price * this.item.quantity;
    this.eventService.shoppingCartTotalUpdated.emit(incrementor);
  }

  decreaseQuantity() {
    if (this.item.quantity > 1) {
      this.item.quantity--;
    }
  }
}
