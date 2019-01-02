import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductData } from './products';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    return ProductData;
  }

}
