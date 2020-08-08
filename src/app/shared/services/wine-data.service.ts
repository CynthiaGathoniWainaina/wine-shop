import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {dev} from '../dev/dev';

@Injectable({
  providedIn: 'root'
})
export class WineDataService {

  public url = `${dev.connect}wineshop-assets`;

  constructor( private http: HttpClient) { }

  getWineData(){
    return this.http.get<any>(this.url + 'wine-shop.json');
  }
}
