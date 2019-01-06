import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from './../../services/data.service';
import { Product } from './../product/Product';

@Component({
  selector: 'app-solo-view',
  templateUrl: './solo-view.component.html',
  styleUrls: ['./solo-view.component.scss']
})
export class SoloViewComponent implements OnInit, OnDestroy {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute) { }

  product: Product;
  productError = false;
  routerSub: any;
  viewMode: string;

  ngOnInit() {
    this.routerSub = this.route.params
      .subscribe((params: any) => {
        const id = +params['id'];
        const mode = params['mode'];
        this.getSelectedProduct(id);
        this.setViewMode(mode);
      });
  }

  getSelectedProduct(id: number) {
      this.product = this.dataService.getProduct(id);
      this.productError = !(!!this.product);
  }

  setViewMode(m: string) {
    this.viewMode = m === 'c' ? 'cart' : 'product';
  }

  ngOnDestroy() {
    this.routerSub = null;
  }
}
