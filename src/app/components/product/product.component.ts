import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

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
    private eventService: EventService) { }

  ngOnInit() {
  }

  onAddToCart() {
    this.shoppingCartService.addItem(this.product);
  }

}
