import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../components/product/Product';
import { ProductData } from './products';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return ProductData;
  }

  getProduct(id: number) {
    return this.getAllProducts()
      .filter((p: Product) => p.id === id)[0];
  }

}
