import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from './../../services/data.service';
import { Product } from './../product/Product';

@Component({
  selector: 'app-solo-view',
  templateUrl: './solo-view.component.html',
  styleUrls: ['./solo-view.component.scss']
})
export class SoloViewComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) { }

  product: Product;
  productError = false;
  routerSub: any;

  ngOnInit() {
    this.routerSub = this.route.params
      .subscribe((params: any) => {
        const id = +params['id'];
        this.getSelectedProduct(id);
      });
  }

 getSelectedProduct(id: number) {
    this.product = this.dataService.getProduct(id);
    if (!this.product) {
      this.productError = true;
    }
 }


}
