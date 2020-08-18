import { Component, OnInit } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  trashIcon = faTrash;
  plusIcon = faPlus;
  minusIcon = faMinus;
  backIcon = faArrowLeft;

  cartTotal: number;
  cartProductList = [];

  constructor(public cartService: CartService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.cartService.currentCartTotal.subscribe(total => this.cartTotal = total);
    this.cartService.currentProducts.subscribe(products => this.cartProductList = products);
  }

  // tslint:disable-next-line:typedef
  decreaseQuantity(no) {
    const index = this.cartProductList.findIndex(product => product.id === no);
    if (index > -1) {
      this.cartProductList[index].quantity = --this.cartProductList[index].quantity;
      if (this.cartProductList[index].quantity === 0) {
        this.cartProductList.splice(index, 1);
      } else {
        this.cartProductList[index].rate = this.cartProductList[index].rate - this.cartProductList[index].price;
      }

      this.cartTotal = 0;
      for (let i = 0; i < this.cartProductList.length; i++) {
        this.cartTotal = this.cartTotal + this.cartProductList[i].rate;
      }
    }

    this.cartService.cartTotal(this.cartTotal, this.cartProductList);
  }

  // tslint:disable-next-line:typedef
  increaseQuantity(no) {
    const index = this.cartProductList.findIndex(product => product.id === no);
    if (index > -1) {
      this.cartProductList[index].quantity = 1 + this.cartProductList[index].quantity;
      this.cartProductList[index].rate = this.cartProductList[index].rate + this.cartProductList[index].price;

      this.cartTotal = 0;
      for (let i = 0; i < this.cartProductList.length; i++) {
        this.cartTotal = this.cartTotal + this.cartProductList[i].rate;
      }
    }
    this.cartService.cartTotal(this.cartTotal, this.cartProductList);
  }


}
