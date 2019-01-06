import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { SoloViewComponent } from './components/solo-view/solo-view.component';

const routes: Routes = [
  { path: 'products' , component: ProductsComponent},
  { path: 'products/product/:mode/:id', component: SoloViewComponent},
  { path: 'cart/item/:mode/:id', component: SoloViewComponent},
  { path: 'cart', component: ShoppingCartComponent},
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path:  '404', component: PageNotFoundComponent},
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
