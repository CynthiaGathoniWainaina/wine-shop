import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {ShopHomeComponent} from './components/home/shop-home/shop-home.component';
import {ShopCartComponent} from './components/home/shop-cart/shop-cart.component';
import {ShopCheckoutComponent} from './components/home/shop-checkout/shop-checkout.component';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailsComponent } from './components/home/product-details/product-details.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    ShopHomeComponent,
    ShopCartComponent,
    ShopCheckoutComponent,
    HomeComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
