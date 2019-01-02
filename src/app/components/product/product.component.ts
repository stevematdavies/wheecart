import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { ProductIconService } from '../../services/product-icon.service';
import { Product } from './Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;


  duplicateDisabled = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productIconService: ProductIconService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.shoppingCartService.addItem(this.product);
  }

  getIconForProduct(name: string) {
    return this.productIconService.getResource(name);
  }

}
