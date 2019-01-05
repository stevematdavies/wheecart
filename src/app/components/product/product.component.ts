import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { Product } from './Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() viewMode: string;
  @Input() inSolo: boolean;
  mobileResponseBreakPointReached = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private router: Router,
    public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 1200px)'])
          .subscribe((state: BreakpointState) => {
            this.mobileResponseBreakPointReached = state.matches;
          });
  }

  onAddToCart(product: Product) {
    this.shoppingCartService.addItem(product);
  }

  onRemoveFromCart(product: Product) {
    this.shoppingCartService.removeItem(product);
    this.router.navigate(['cart']);
  }

  navigateToInfoView(id: number) {
    this.router.navigate([`product/p/${id}`], { relativeTo: this.route });
  }

}
