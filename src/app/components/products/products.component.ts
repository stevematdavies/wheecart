import { Component, OnInit } from '@angular/core';

import { Product } from '../product/Product';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.products = this.dataService.getAllProducts();
  }
}
