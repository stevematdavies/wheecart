import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { EventService } from './services/event.service';
import { SoloViewComponent } from './components/solo-view/solo-view.component';
import { SquareButtonComponent } from './components/shared/square-button/square-button.component';
import { AlertComponent } from './components/shared/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    SoloViewComponent,
    SquareButtonComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingCartService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
