import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopHomeComponent} from './components/home/shop-home/shop-home.component';
import {HomeComponent} from './components/home/home.component';
import {ShopCartComponent} from './components/home/shop-cart/shop-cart.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // Shop Home
  { path: 'home', component: HomeComponent,
    children: [{ path: '', component: ShopHomeComponent}]
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
