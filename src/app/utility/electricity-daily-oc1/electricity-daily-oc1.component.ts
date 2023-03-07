import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Chart } from 'chart.js';
import * as moment from 'moment';
import { ServiceService } from 'src/app/services/service.service';
// import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-electricity-daily-oc1',
  templateUrl: './electricity-daily-oc1.component.html',
  styleUrls: ['./electricity-daily-oc1.component.css']
})
export class ElectricityDailyOc1Component {
  // FILTER
  mySearch: FormGroup;
  start7days: any
  end7days: any
  Search: string | any;

  constructor(
    private _service: ServiceService,
    public datepipe: DatePipe
  ) {
    let start7days = moment().subtract(30, 'days').format('YYYY-MM-DD');
    let end7days = moment().format('YYYY-MM-DD');
    this.Search = (new Date()).getFullYear()

    let startday = moment().format('YYYY-MM-DD');
    let endday = moment().format('YYYY-MM-DD');
    let start_time = new FormControl(startday);
    let end_time = new FormControl(endday);
    this.mySearch = new FormGroup({
      start_time,
      end_time
    });
  }

  filter_data = () => {
  }

}
