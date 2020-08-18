import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-shop-checkout',
  templateUrl: './shop-checkout.component.html',
  styleUrls: ['./shop-checkout.component.css']
})
export class ShopCheckoutComponent implements OnInit {

  cartTotal: number;
  cartProductList = [];

  constructor(public cartService: CartService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.cartService.currentCartTotal.subscribe(total => this.cartTotal = total);
    this.cartService.currentProducts.subscribe(products => this.cartProductList = products);
  }

}
