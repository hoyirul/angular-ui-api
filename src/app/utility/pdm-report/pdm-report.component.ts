import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service'
import Chart from 'chart.js/auto';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pdm-report',
  templateUrl: './pdm-report.component.html',
  styleUrls: ['./pdm-report.component.css']
})
export class PdmReportComponent {
  
  //vibration
  public vib_chart: any
  public vib_label: any = []
  public vib_data_chart: any = []

  public vib_data_aux: any
  public vib_promise_aux: any

  public vib_data_wwtp: any
  public vib_promise_wwtp: any

  public vib_data_wtp: any
  public vib_promise_wtp: any

  public vib_data_gt: any
  public vib_promise_gt: any

  public vib_data_pump: any
  public vib_promise_pump: any

  public vib_data_ct: any
  public vib_promise_ct: any

  //temp
  public temp_chart: any
  public temp_label: any = []
  public temp_data_chart: any = []

  public temp_data_aux: any
  public temp_promise_aux: any

  public temp_data_wwtp: any
  public temp_promise_wwtp: any

  public temp_data_wtp: any
  public temp_promise_wtp: any

  public temp_data_gt: any
  public temp_promise_gt: any

  public temp_data_pump: any
  public temp_promise_pump: any

  public temp_data_ct: any
  public temp_promise_ct: any

  //ampere
  public ampere_chart: any
  public ampere_label: any = []
  public ampere_data_chart: any = []

  public ampere_data_aux: any
  public ampere_promise_aux: any

  public ampere_data_wwtp: any
  public ampere_promise_wwtp: any

  public ampere_data_wtp: any
  public ampere_promise_wtp: any

  public ampere_data_gt: any
  public ampere_promise_gt: any

  public ampere_data_pump: any
  public ampere_promise_pump: any

  public ampere_data_ct: any
  public ampere_promise_ct: any
  //percentage
  public vibration: any = [];
  public temperature: any = [];
  public ampere: any = [];

  public totalAlldata: any = 0;
  public totalAllGood: any = 0;
  public totalAllAlarm: any = 0;
  public totalAllDanger: any = 0;
   //filter
   alarm_filter: any
   total_alarm_filter: any
 
   myFormSearch: FormGroup;
   start_time_result: any
   end_time_result: any
   start30days: any
   end30days: any

  constructor(
    private _service: ServiceService,
    public datepipe: DatePipe
  ) { 
    this.start30days = moment().subtract(30, 'days').format('YYYY-MM-DD');
    this.end30days = moment().format('YYYY-MM-DD');

    let start_time = new FormControl(this.start30days);
    let end_time = new FormControl(this.end30days);

    this.start_time_result = start_time.value
    this.end_time_result = end_time.value

    //console.log(start_time.value)
    //console.log(end_time.value)
    this.myFormSearch = new FormGroup({
      start_time,
      end_time
    });
  }

  async ngOnInit(): Promise<void> {
    this.start30days = moment().subtract(30, 'days').format('YYYY-MM-DD');
    this.end30days = moment().format('YYYY-MM-DD');

     //ampere
     this.ampere_promise_aux = new Promise(resolve => {
      this._service.getampAux(this.start30days, this.end30days).subscribe(
        (data: any) => {
          console.log("amp aux",data);

          resolve(data.data);
        }
      )
    });

    this.ampere_data_aux = await this.ampere_promise_aux;
    this.ampere.push({
      name: 'Ampere Aux',
      countGood: this.ampere_data_aux[0].countGood,
      countAlarm: this.ampere_data_aux[0].countAlarm,
      countDanger: this.ampere_data_aux[0].countDanger,
      total: this.ampere_data_aux[0].total,
      goodPercentage: this.ampere_data_aux[0].countGood / this.ampere_data_aux[0].total,
      alarmPercentage: this.ampere_data_aux[0].countAlarm / this.ampere_data_aux[0].total,
      dangerPercentage: this.ampere_data_aux[0].countDanger / this.ampere_data_aux[0].total
    })

    this.ampere_promise_wwtp = new Promise(resolve => {
      this._service.getampWwtp(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.ampere_data_wwtp = await this.ampere_promise_wwtp;
    this.ampere.push({
      name: 'Ampere wwtp',
      countGood: this.ampere_data_wwtp[0].countGood,
      countAlarm: this.ampere_data_wwtp[0].countAlarm,
      countDanger: this.ampere_data_wwtp[0].countDanger,
      total: this.ampere_data_wwtp[0].total,
      goodPercentage: this.ampere_data_wwtp[0].countGood / this.ampere_data_wwtp[0].total,
      alarmPercentage: this.ampere_data_wwtp[0].countAlarm / this.ampere_data_wwtp[0].total,
      dangerPercentage: this.ampere_data_wwtp[0].countDanger / this.ampere_data_wwtp[0].total
    })

    this.ampere_promise_wtp = new Promise(resolve => {
      this._service.getampWtp(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.ampere_data_wtp = await this.ampere_promise_wtp;
    this.ampere.push({
      name: 'Ampere wtp',
      countGood: this.ampere_data_wtp[0].countGood,
      countAlarm: this.ampere_data_wtp[0].countAlarm,
      countDanger: this.ampere_data_wtp[0].countDanger,
      total: this.ampere_data_wtp[0].total,
      goodPercentage: this.ampere_data_wtp[0].countGood / this.ampere_data_wtp[0].total,
      alarmPercentage: this.ampere_data_wtp[0].countAlarm / this.ampere_data_wtp[0].total,
      dangerPercentage: this.ampere_data_wtp[0].countDanger / this.ampere_data_wtp[0].total
    })

    this.ampere_promise_pump = new Promise(resolve => {
      this._service.getampPump(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.ampere_data_pump = await this.ampere_promise_pump;
    this.ampere.push({
      name: 'Ampere pump',
      countGood: this.ampere_data_pump[0].countGood,
      countAlarm: this.ampere_data_pump[0].countAlarm,
      countDanger: this.ampere_data_pump[0].countDanger,
      total: this.ampere_data_pump[0].total,
      goodPercentage: this.ampere_data_pump[0].countGood / this.ampere_data_pump[0].total,
      alarmPercentage: this.ampere_data_pump[0].countAlarm / this.ampere_data_pump[0].total,
      dangerPercentage: this.ampere_data_pump[0].countDanger / this.ampere_data_pump[0].total
    })

    this.ampere_promise_gt = new Promise(resolve => {
      this._service.getampGt(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.ampere_data_gt = await this.ampere_promise_gt;
    this.ampere.push({
      name: 'Ampere gt',
      countGood: this.ampere_data_gt[0].countGood,
      countAlarm: this.ampere_data_gt[0].countAlarm,
      countDanger: this.ampere_data_gt[0].countDanger,
      total: this.ampere_data_gt[0].total,
      goodPercentage: this.ampere_data_gt[0].countGood / this.ampere_data_gt[0].total,
      alarmPercentage: this.ampere_data_gt[0].countAlarm / this.ampere_data_gt[0].total,
      dangerPercentage: this.ampere_data_gt[0].countDanger / this.ampere_data_gt[0].total
    })

    this.ampere_promise_ct = new Promise(resolve => {
      this._service.getampCt(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.ampere_data_ct = await this.ampere_promise_ct;
    this.ampere.push({
      name: 'Ampere ct',
      countGood: this.ampere_data_ct[0].countGood,
      countAlarm: this.ampere_data_ct[0].countAlarm,
      countDanger: this.ampere_data_ct[0].countDanger,
      total: this.ampere_data_ct[0].total,
      goodPercentage: this.ampere_data_ct[0].countGood / this.ampere_data_ct[0].total,
      alarmPercentage: this.ampere_data_ct[0].countAlarm / this.ampere_data_ct[0].total,
      dangerPercentage: this.ampere_data_ct[0].countDanger / this.ampere_data_ct[0].total
    })

    //vibration
    this.vib_promise_aux = new Promise(resolve => {
      this._service.getvibAux("2022-12-11", "2023-1-11").subscribe(
        (data: any) => {
          console.log(data);

          resolve(data.data);
        }
      )
    });

    this.vib_data_aux = await this.vib_promise_aux;
    this.vibration.push({
      name: 'vib Aux',
      countGood: this.vib_data_aux[0].countGood,
      countAlarm: this.vib_data_aux[0].countAlarm,
      countDanger: this.vib_data_aux[0].countDanger,
      total: this.vib_data_aux[0].total,
      goodPercentage: this.vib_data_aux[0].countGood / this.vib_data_aux[0].total,
      alarmPercentage: this.vib_data_aux[0].countAlarm / this.vib_data_aux[0].total,
      dangerPercentage: this.vib_data_aux[0].countDanger / this.vib_data_aux[0].total
    })
    
    console.log("test",this.vibration);
    
    this.vib_promise_wwtp = new Promise(resolve => {
      this._service.getvibWwtp(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    
    this.vib_data_wwtp = await this.vib_promise_wwtp;
    this.vibration.push({
      name: 'vib wwtp',
      countGood: this.vib_data_wwtp[0].countGood,
      countAlarm: this.vib_data_wwtp[0].countAlarm,
      countDanger: this.vib_data_wwtp[0].countDanger,
      total: this.vib_data_wwtp[0].total,
      goodPercentage: this.vib_data_wwtp[0].countGood / this.vib_data_wwtp[0].total,
      alarmPercentage: this.vib_data_wwtp[0].countAlarm / this.vib_data_wwtp[0].total,
      dangerPercentage: this.vib_data_wwtp[0].countDanger / this.vib_data_wwtp[0].total
    })

    this.vib_promise_wtp = new Promise(resolve => {
      this._service.getvibWtp(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.vib_data_wtp = await this.vib_promise_wtp;
    this.vibration.push({
      name: 'vib wtp',
      countGood: this.vib_data_wtp[0].countGood,
      countAlarm: this.vib_data_wtp[0].countAlarm,
      countDanger: this.vib_data_wtp[0].countDanger,
      total: this.vib_data_wtp[0].total,
      goodPercentage: this.vib_data_wtp[0].countGood / this.vib_data_wtp[0].total,
      alarmPercentage: this.vib_data_wtp[0].countAlarm / this.vib_data_wtp[0].total,
      dangerPercentage: this.vib_data_wtp[0].countDanger / this.vib_data_wtp[0].total
    })
    
    this.vib_promise_pump = new Promise(resolve => {
      this._service.getvibPump(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.vib_data_pump = await this.vib_promise_pump;
    this.vibration.push({
      name: 'vib pump',
      countGood: this.vib_data_pump[0].countGood,
      countAlarm: this.vib_data_pump[0].countAlarm,
      countDanger: this.vib_data_pump[0].countDanger,
      total: this.vib_data_pump[0].total,
      goodPercentage: this.vib_data_pump[0].countGood / this.vib_data_pump[0].total,
      alarmPercentage: this.vib_data_pump[0].countAlarm / this.vib_data_pump[0].total,
      dangerPercentage: this.vib_data_pump[0].countDanger / this.vib_data_pump[0].total
    })

    this.vib_promise_gt = new Promise(resolve => {
      this._service.getvibGt(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.vib_data_gt = await this.vib_promise_gt;
    this.vibration.push({
      name: 'vib gt',
      countGood: this.vib_data_gt[0].countGood,
      countAlarm: this.vib_data_gt[0].countAlarm,
      countDanger: this.vib_data_gt[0].countDanger,
      total: this.vib_data_gt[0].total,
      goodPercentage: this.vib_data_gt[0].countGood / this.vib_data_gt[0].total,
      alarmPercentage: this.vib_data_gt[0].countAlarm / this.vib_data_gt[0].total,
      dangerPercentage: this.vib_data_gt[0].countDanger / this.vib_data_gt[0].total
    })

    this.vib_promise_ct = new Promise(resolve => {
      this._service.getvibCt(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.vib_data_ct = await this.vib_promise_ct;
    this.vibration.push({
      name: 'vib ct',
      countGood: this.vib_data_ct[0].countGood,
      countAlarm: this.vib_data_ct[0].countAlarm,
      countDanger: this.vib_data_ct[0].countDanger,
      total: this.vib_data_ct[0].total,
      goodPercentage: this.vib_data_ct[0].countGood / this.vib_data_ct[0].total,
      alarmPercentage: this.vib_data_ct[0].countAlarm / this.vib_data_ct[0].total,
      dangerPercentage: this.vib_data_ct[0].countDanger / this.vib_data_ct[0].total
    })

    console.log(this.vibration);
    

    //temp
    this.temp_promise_aux = new Promise(resolve => {
      this._service.gettempAux(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.temp_data_aux = await this.temp_promise_aux;
    this.temperature.push({
      name: 'temp Aux',
      countGood: this.temp_data_aux[0].countGood,
      countAlarm: this.temp_data_aux[0].countAlarm,
      countDanger: this.temp_data_aux[0].countDanger,
      total: this.temp_data_aux[0].total,
      goodPercentage: this.temp_data_aux[0].countGood / this.temp_data_aux[0].total,
      alarmPercentage: this.temp_data_aux[0].countAlarm / this.temp_data_aux[0].total,
      dangerPercentage: this.temp_data_aux[0].countDanger / this.temp_data_aux[0].total
    })

    this.temp_promise_wwtp = new Promise(resolve => {
      this._service.gettempWwtp(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.temp_data_wwtp = await this.temp_promise_wwtp;
    this.temperature.push({
      name: 'temp wwtp',
      countGood: this.temp_data_wwtp[0].countGood,
      countAlarm: this.temp_data_wwtp[0].countAlarm,
      countDanger: this.temp_data_wwtp[0].countDanger,
      total: this.temp_data_wwtp[0].total,
      goodPercentage: this.temp_data_wwtp[0].countGood / this.temp_data_wwtp[0].total,
      alarmPercentage: this.temp_data_wwtp[0].countAlarm / this.temp_data_wwtp[0].total,
      dangerPercentage: this.temp_data_wwtp[0].countDanger / this.temp_data_wwtp[0].total
    })

    this.temp_promise_wtp = new Promise(resolve => {
      this._service.gettempWtp(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.temp_data_wtp = await this.temp_promise_wtp;
    this.temperature.push({
      name: 'temp wtp',
      countGood: this.temp_data_wtp[0].countGood,
      countAlarm: this.temp_data_wtp[0].countAlarm,
      countDanger: this.temp_data_wtp[0].countDanger,
      total: this.temp_data_wtp[0].total,
      goodPercentage: this.temp_data_wtp[0].countGood / this.temp_data_wtp[0].total,
      alarmPercentage: this.temp_data_wtp[0].countAlarm / this.temp_data_wtp[0].total,
      dangerPercentage: this.temp_data_wtp[0].countDanger / this.temp_data_wtp[0].total
    })

    this.temp_promise_pump = new Promise(resolve => {
      this._service.gettempPump(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.temp_data_pump = await this.temp_promise_pump;
    this.temperature.push({
      name: 'temp pump',
      countGood: this.temp_data_pump[0].countGood,
      countAlarm: this.temp_data_pump[0].countAlarm,
      countDanger: this.temp_data_pump[0].countDanger,
      total: this.temp_data_pump[0].total,
      goodPercentage: this.temp_data_pump[0].countGood / this.temp_data_pump[0].total,
      alarmPercentage: this.temp_data_pump[0].countAlarm / this.temp_data_pump[0].total,
      dangerPercentage: this.temp_data_pump[0].countDanger / this.temp_data_pump[0].total
    })

    this.temp_promise_gt = new Promise(resolve => {
      this._service.gettempGt(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.temp_data_gt = await this.temp_promise_gt;
    this.temperature.push({
      name: 'temp gt',
      countGood: this.temp_data_gt[0].countGood,
      countAlarm: this.temp_data_gt[0].countAlarm,
      countDanger: this.temp_data_gt[0].countDanger,
      total: this.temp_data_gt[0].total,
      goodPercentage: this.temp_data_gt[0].countGood / this.temp_data_gt[0].total,
      alarmPercentage: this.temp_data_gt[0].countAlarm / this.temp_data_gt[0].total,
      dangerPercentage: this.temp_data_gt[0].countDanger / this.temp_data_gt[0].total
    })

    this.temp_promise_ct = new Promise(resolve => {
      this._service.gettempCt(this.start30days, this.end30days).subscribe(
        (data: any) => {
          // console.log(data);

          resolve(data.data);
        }
      )
    });

    this.temp_data_ct = await this.temp_promise_ct;
    this.temperature.push({
      name: 'temp ct',
      countGood: this.temp_data_ct[0].countGood,
      countAlarm: this.temp_data_ct[0].countAlarm,
      countDanger: this.temp_data_ct[0].countDanger,
      total: this.temp_data_ct[0].total,
      goodPercentage: this.temp_data_ct[0].countGood / this.temp_data_ct[0].total,
      alarmPercentage: this.temp_data_ct[0].countAlarm / this.temp_data_ct[0].total,
      dangerPercentage: this.temp_data_ct[0].countDanger / this.temp_data_ct[0].total
    })

   
  }

}
