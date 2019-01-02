import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductIconService {

  constructor() { }

  resourceIconRoot = 'assets/icons.svg';

  getResource(name: string) {
    const resource =  name.toLocaleLowerCase();
    const path = `${this.resourceIconRoot}#icon-${resource}`;
    return path;
  }

}
