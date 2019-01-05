import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Product } from '../product/Product';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() item: Product;
  mobileResponseBreakPointReached = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router,
    public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
    .observe(['(max-width: 800px)'])
        .subscribe((state: BreakpointState) => {
          this.mobileResponseBreakPointReached = state.matches;
        });
  }

  onRemoveFromCart(item: Product) {
    this.shoppingCartService.removeItem(item);
  }

  navigateToInfoView(id: number) {
    this.router.navigate([`item/c/${id}`], { relativeTo: this.route });
  }

}
