/* tslint:disable:typedef */
import { Component, OnInit } from '@angular/core';
import {WineDataService} from '../../../shared/services/wine-data.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-shop-home',
  templateUrl: './shop-home.component.html',
  styleUrls: ['./shop-home.component.css']
})
export class ShopHomeComponent implements OnInit {

  constructor(
    private wineDataService: WineDataService,
    private spinner: NgxSpinnerService

  ) { }

  public WineData = [];
  // public WineBottle: any;

  ngOnInit() {


    this.spinner.show();

    this.wineDataService.getWineData().toPromise().then(data => {
      this.WineData = data;
    });

    this.spinner.hide();



    // this.wineDataService.getWineBottleImages('hukupapa.png').subscribe(base64data => {
    //   console.log(base64data);
    //   this.WineBottle = base64data;
    // });



  }




}
