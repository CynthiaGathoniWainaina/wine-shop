import { Component, OnInit } from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import {faMinus} from "@fortawesome/free-solid-svg-icons/faMinus";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  plusIcon = faPlus;
  minusIcon = faMinus;

  constructor() { }

  ngOnInit(): void {
  }

}
