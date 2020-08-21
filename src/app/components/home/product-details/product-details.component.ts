import { Component, OnInit } from '@angular/core';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';
import {ActivatedRoute} from '@angular/router';
import {WineDataService} from '../../../shared/services/wine-data.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {CartService} from '../../../shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  backIcon = faArrowLeft;

  toggle = true;
  status = 'Enable';


  public selectedProductNo: any;
  public selectedProduct: any;
  public product: any;
  public imageUrl = 'https://storage.googleapis.com/wineshop-assets/wine-bottles/';


  public cartList = [];
  public cartTotal = 0;


  constructor(
    private wineDataService: WineDataService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    public cart: CartService,
  ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getSelectedProduct();
    this.cart.currentProducts
      .subscribe(products => this.cartList = products);

  }

  // Function to receive selected product from homepage
  getSelectedProduct(): void {
    this.route.queryParams.subscribe(params => {
      this.selectedProduct = params;
      setTimeout(() => {
        this.spinner.hide();
      }, 1000);
      console.log(this.selectedProduct);
    });
  }

  // tslint:disable-next-line:typedef
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }

  // tslint:disable-next-line:typedef
  addProductToCart(selectedProduct) {
    selectedProduct.quantity = 1;
    selectedProduct.rate = selectedProduct.cost.bottle;

    const index = this.cartList.findIndex(cartProduct => cartProduct.id === selectedProduct.no);

    if (index > -1) {
      console.log('here');
      this.cartList[index].quantity = selectedProduct.quantity + this.cartList[index].quantity;
      this.cartList[index].rate = selectedProduct.cost.bottle + this.cartList[index].rate;
      console.log(this.cartList);
    } else {
      this.cartList.push(selectedProduct);
    }

    this.cartTotal = 0;
    for (let i = 0; i < this.cartList.length; i++) {
      this.cartTotal = this.cartTotal + this.cartList[i].rate;
    }
    this.cart.cartTotal(this.cartTotal, this.cartList);
  }

}
