// import * as XLSX from "xlsx";
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const getFileName = (name: any) => {
  let _urlLink = "http://localhost:4200/utility-energy/"
  let sheetName
  if (window.location.href == _urlLink + "vib-detail") {
    sheetName = name || "vibration-detail"
  } else if (window.location.href == _urlLink + "amp-detail") {
    sheetName = name || "ampere-detail"

  } else if (window.location.href == _urlLink + "temp-detail") {
    sheetName = name || "temperature-detail"
  }
  let fileName = `${sheetName}`;
  return {
    sheetName,
    fileName
  };
};


@Injectable({
  providedIn: 'root'
})
export class TrainingDetailService {

  // static exportTableToExcel(tableId: string, name?: string) {
  //   let { sheetName, fileName } = getFileName(name);
  //   let targetTableElm = document.getElementById(tableId);
  //   let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
  //     sheet: sheetName
  //   });
  //   const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
  //     targetTableElm,<XLSX.Table2SheetOpts>{
  //       sheet: sheetName
  //     }
  //   );
  //   // console.log("ws",ws);
    
  //   // let wb: XLSX.WorkBook = XLSX.utils.book_new();
  //   // console.log("wb",wb);
    
  //   // wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
  //   //   sheet: sheetName
  //   // });
  //   // console.log("wb1",wb);
    
  //   // XLSX.utils.book_append_sheet(wb, ws, "test");
    
    
  //   // console.log("tts",XLSX.utils.table_to_sheet(targetTableElm));
  //   XLSX.writeFile(wb, `${fileName}.xlsx`);
  // }

  // static exportArrayToExcel(arr: any[], name?: string) {
  //   let { sheetName, fileName } = getFileName(name,);

  //   var wb = XLSX.utils.book_new();
  //   var ws = XLSX.utils.json_to_sheet(arr);
  //   XLSX.utils.book_append_sheet(wb, ws, sheetName);
  //   XLSX.writeFile(wb, `${fileName}.xlsx`);
  // }

    //training
    
    urlAPIforFile() {
      return environment.apiURL;
    }
  
    //url
    // private _url: string = "http://192.168.9.47:3100";
    private _url: string = "http://127.0.0.1:3100";
  
    constructor(
      private http: HttpClient
    ) { }
  
    getTraining = (tahun: string) => {
      return this.http.post(this._url + "/training/gettraining?tahun="+ tahun, tahun).pipe(
        catchError(this.errorHttpHandler)
      )
    }
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
}
