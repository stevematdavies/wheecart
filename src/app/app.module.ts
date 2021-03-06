import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotifierModule } from 'angular-notifier';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { HeaderLogoComponent } from './components/shared/header-logo/header-logo.component';
import { MainLogoComponent } from './components/shared/main-logo/main-logo.component';
import { ShapesComponent } from './components/shared/shapes/shapes.component';
import { WarningBoxComponent } from './components/shared/warning-box/warning-box.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SoloViewComponent } from './components/solo-view/solo-view.component';
import { notifierConfig } from './notifier.config';
import { EventService } from './services/event.service';
import { HeaderWCartcountComponent } from './components/shared/header-w-cartcount/header-w-cartcount.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    SoloViewComponent,
    ShapesComponent,
    HeaderLogoComponent,
    WarningBoxComponent,
    PageNotFoundComponent,
    MainLogoComponent,
    HeaderWCartcountComponent,
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    NotifierModule.withConfig(notifierConfig)
  ],
  providers: [ShoppingCartService, EventService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
