import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit() {
    if (!this.shoppingCartService.getShoppingCart()) {
      this.shoppingCartService.initStorage();
    }
  }
}
