import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {ShopHomeComponent} from './components/home/shop-home/shop-home.component';
import {ShopCartComponent} from './components/home/shop-cart/shop-cart.component';
import {ShopCheckoutComponent} from './components/home/shop-checkout/shop-checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopHomeComponent,
    ShopCartComponent,
    ShopCheckoutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
