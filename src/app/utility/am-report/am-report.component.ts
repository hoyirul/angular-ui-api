import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service'

@Component({
  selector: 'app-am-report',
  templateUrl: './am-report.component.html',
  styleUrls: ['./am-report.component.css']
})
export class AmReportComponent {

  showPageaux = 5
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }
  filterTerm:any;
  // filterTermm:number=0;
  constructor(private _service: ServiceService,) {

  }

  activity_report: any = []
  public data_am: any
  ngOnInit(): void {

    this._service.getautonomous().subscribe(
      (data: any) => {
        this.data_am = data.data.all
        console.log(this.data_am);
      }
    )
  }
}
