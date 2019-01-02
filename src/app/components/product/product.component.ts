import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private shopingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.shopingCartService.addItem(this.product);
  }

}
