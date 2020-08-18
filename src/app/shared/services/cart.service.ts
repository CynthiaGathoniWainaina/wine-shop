import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartProductsTotal = new BehaviorSubject(0);
  private cartProducts = new BehaviorSubject([]);

  currentCartTotal = this.cartProductsTotal.asObservable();
  currentProducts = this.cartProducts.asObservable();


  // tslint:disable-next-line:typedef
  cartTotal(total: number, products: any) {
    this.cartProductsTotal.next(total);
    this.cartProducts.next(products);
  }




}
