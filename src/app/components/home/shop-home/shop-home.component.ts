/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {WineDataService} from '../../../shared/services/wine-data.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  public WineData = [];
  public VintageWine = [];
  public imageUrl = 'https://storage.googleapis.com/wineshop-assets/wine-bottles/';

  constructor(
    private wineDataService: WineDataService,
    private spinner: NgxSpinnerService,
    private router: Router,
  ) {}

  ngOnInit() {
  this.spinner.show();

  // Function to fetch wine data
  this.wineDataService.getWineData().toPromise().then(data => {
    this.WineData = data;
    setTimeout(() => {
        this.spinner.hide();
      }, 1000);
    });
  }

  // Function to show details of selected wine bottle
  onSelect(product){
    this.router.navigate(['/product-details'], { queryParams: product});
  }

  vintageWineFilter(){
    this.VintageWine = this.WineData.filter(item => item.type === 'vintage');
  }


}
