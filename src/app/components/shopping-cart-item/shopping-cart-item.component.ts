import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Product } from '../product/Product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: Product;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
  }

  onRemoveFromCart() {
    this.shoppingCartService.removeItem(this.item);
  }


}
