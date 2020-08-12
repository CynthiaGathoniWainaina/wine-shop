import { Component, OnInit } from '@angular/core';
import {faTrash} from '@fortawesome/free-solid-svg-icons/faTrash';
import {faPlus} from '@fortawesome/free-solid-svg-icons/faPlus';
import {faMinus} from '@fortawesome/free-solid-svg-icons/faMinus';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  constructor() { }

  trashIcon = faTrash;
  plusIcon = faPlus;
  minusIcon = faMinus;



  ngOnInit(): void {
  }

}
