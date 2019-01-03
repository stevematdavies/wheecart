import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SoloViewComponent } from './components/solo-view/solo-view.component';

const routes: Routes = [
  { path: 'products' , component: ProductsComponent},
  { path: 'products/product/:mode/:id', component: SoloViewComponent},
  { path: 'cart/item/:mode/:id', component: SoloViewComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
