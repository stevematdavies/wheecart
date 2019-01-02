import { Component, OnInit } from '@angular/core';

import { Product } from '../product/Product';
import { DataService } from './../../services/data.service';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private dataService: DataService, private eventService: EventService) { }

  ngOnInit() {
    this.eventService.appModeChanged.emit('products');
    this.products = this.dataService.getAllProducts();
  }
}
