import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopHomeComponent} from './components/home/shop-home/shop-home.component';
import {HomeComponent} from './components/home/home.component';
import {ShopCartComponent} from './components/home/shop-cart/shop-cart.component';
import {ProductDetailsComponent} from "./components/home/product-details/product-details.component";

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Shop Home
  { path: 'home', component: HomeComponent,
    children: [{ path: '', component: ShopHomeComponent}]
  },

  { path: 'product-details', component: HomeComponent,
    children: [{ path: '', component: ProductDetailsComponent}]
  },

  { path: 'cart', component: HomeComponent,
    children: [{ path: '', component: ShopCartComponent}]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
