import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getCountProduct() : Observable<any> {
    return this.httpClient.get(environment.apiURL + '/products/by_category')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  getCountProductByOrder() : Observable<any> {
    return this.httpClient.get(environment.apiURL + '/products/by_order')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  /** 
   * Write code on Method
   *
   * @return response()
   */
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
