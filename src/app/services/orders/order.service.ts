import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getTotalByMonth() : Observable<any> {
    return this.httpClient.get(environment.apiURL + '/orders/monthly')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getTotalByYear() : Observable<any> {
    return this.httpClient.get(environment.apiURL + '/ordersall')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getOrderDynamic(year: string) : Observable<any> {
    return this.httpClient.post(environment.apiURL + '/orders?year=' + year, year)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
