import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() productMode: boolean;
  @Input() inSolo: boolean;
  duplicateDisabled = false;
  mobileResponseBreakPointReached = false;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private productIconService: ProductIconService,
    private route: ActivatedRoute,
    private router: Router,
    public breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
          .subscribe((state: BreakpointState) => {
            this.mobileResponseBreakPointReached = state.matches;
          });
  }

  onAddToCart() {
    this.shoppingCartService.addItem(this.product);
  }

  getIconForProduct(name: string) {
    return this.productIconService.getResource(name);
  }

  navigateToInfoView(id: number) {
    this.router.navigate([`product/p/${id}`], { relativeTo: this.route });
  }

  onRemoveFromCart() {
    this.shoppingCartService.removeItem(this.product);
    this.router.navigate(['cart']);
  }

}
