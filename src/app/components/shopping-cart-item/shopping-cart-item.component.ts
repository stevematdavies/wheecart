import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {}

  onRemoveFromCart() {
    this.shoppingCartService.removeItem(this.item);
  }

  getIconForProduct(name: string) {
    return this.productIconService.getResource(name);
  }

  navigateToInfoView(id: number) {
    this.router.navigate([`item/c/${id}`], { relativeTo: this.route });
  }

}
