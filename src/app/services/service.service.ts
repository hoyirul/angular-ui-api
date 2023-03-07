import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  urlAPIforFile() {
    return environment.apiURL;
  }

  // URL NG BUILD E-RANGER
  // private _url: string = "http://192.168.9.47:3100";
  private _url: string = "http://127.0.0.1:3100";

  constructor(
    private http: HttpClient
  ) { }
  // ERROR HANDLER
  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  //PDM REPORT - AMPERE AUX
  getampAux = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getampaux" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - AMPERE WWTP
  getampWwtp = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getampwwtp" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - AMPERE WTP
  getampWtp = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getampwtp" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - AMPERE PUMP
  getampPump = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getamppump" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - AMPERE GT
  getampGt = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getampgt" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - AMPERE CT
  getampCt = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getampct" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - VIBRATION AUX
  getvibAux = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getvibaux" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - VIBRATION WWTP
  getvibWwtp = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getvibwwtp" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - VIBRATION WTP
  getvibWtp = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getvibwtp" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - VIBRATION PUMP
  getvibPump = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getvibpump" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - VIBRATION GT
  getvibGt = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getvibgt" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - VIBRATION CT
  getvibCt = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/getvibct" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }
  
  //PDM REPORT - TEMPERATURE AUX
  gettempAux = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/gettempaux" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - TEMPERATURE WWTP
  gettempWwtp = (start_time: string, end_time: any) => {
    return this.http.get(this._url + "/pdm/gettempwwtp" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - TEMPERATURE WTP
  gettempWtp = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/gettempwtp" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - TEMPERATURE PUMP
  gettempPump = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/gettemppump" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - TEMPERATURE GT
  gettempGt = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/gettempgt" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //PDM REPORT - TEMPERATURE CT
  gettempCt = (start_time: string, end_time: string) => {
    return this.http.get(this._url + "/pdm/gettempct" + '?start_time=' + start_time + '&end_time=' + end_time).pipe(
      catchError(this.errorHttpHandler)
    )
  }

  //AM REPORT AUTONOMOUS
  getautonomous = () => {
    return this.http.get(this._url + "/am/getautonomous").pipe(
      catchError(this.errorHttpHandler)
    )
  }


}
