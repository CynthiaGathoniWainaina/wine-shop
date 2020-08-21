/* tslint:disable:typedef */
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {dev} from '../dev/dev';
import {Observable, of} from 'rxjs';
import {WineProduct} from '../models/wine-product';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WineDataService {

  public url = `${dev.connect}wineshop-assets/`;
  public product: WineProduct;

  header = new HttpHeaders().set('Content-Type', `application/json`);

  constructor( private http: HttpClient) { }

  getWineData(){
    return this.http.get<any>(this.url + 'wine-shop.json', {headers: this.header});
  }

  getWineBottleById(no: any): Observable<any> {
    return this.http.get<WineProduct>(this.url + 'wine-shop.json/' + no).pipe(
      retry(3), catchError(this.handleError<WineProduct>('getWineBottle')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }

}
