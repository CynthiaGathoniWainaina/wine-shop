/* tslint:disable:typedef */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {dev} from '../dev/dev';

@Injectable({
  providedIn: 'root'
})
export class WineDataService {

  public url = `${dev.connect}wineshop-assets/`;

  header = new HttpHeaders().set('Content-Type', `application/json`);

  constructor( private http: HttpClient) { }

  getWineData(){
    return this.http.get<any>(this.url + 'wine-shop.json', {headers: this.header});
  }

}
