import { Component, OnInit } from '@angular/core';
import { TrainingDetailService } from '../../services/tabel-training/training-detail.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
// import * as XLSX from "xlsx";
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {
  showPageaux = 5
  itemsPerPage: number = 0;
  currentPage: number = 1;
  absoluteIndex(indexOnPage: number): number {
    return this.itemsPerPage * (this.currentPage - 1) + indexOnPage;
  }

  training_data:any
  year_training:any
  tahun_filter = ["2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"]
  Search: string | any;
  filterTerm: any = "2023";

  // chart training
  data_chart: any
  training_chart: any
  training_name: any = []
  training_total: any = []

  //month
  data_chart_month: any
  public training_chart_month: any
  training_label_month: any = []
  training_total_month: any = []

  training_target: any = []
  target_training = 10

  constructor(
    private _service: TrainingDetailService,
    public datepipe: DatePipe,
  ) { 
    this.year_training = moment().format('YYYY');
    this.Search = this.year_training
  }

  // Chart Report Training
  getChartTraining(){
    //training
    this._service.getTraining(this.year_training).subscribe(
      (data: any) => {
        this.data_chart = data.record_training
        for (let item of this.data_chart) {
          this.training_name.push(item.name)
          this.training_total.push(item.total)
          this.training_target.push(this.target_training)
        }
        this.data_chart_month = data.record_training_month
        for (let item of this.data_chart_month) {
          let month = item.Date
          let monthconv = this.datepipe.transform(month, 'MMMM')
          this.training_label_month.push(monthconv)
          this.training_total_month.push(item.jumlah_peserta)

        }
        const footer = () => {
          let name;

          for (let item of this.data_chart_month) {
            name = item.Nama_Peserta
          }

          return 'Name: ' + name;
        };

        this.training_chart = new Chart('training', {
          type: 'bar',
          options: {

            responsive: true,
            scales:{
              x:{
                beginAtZero: true,
                grid:{
                  display: false
                },
                stacked:true
              },
              y:{
                beginAtZero: true,
                grid:{
                  display: false
                },
                // stacked:true
              }
            }
          },
          data: {
            labels: this.training_name,
            datasets: [       
            {
              type: 'line',
              label: 'Target',
              data: this.training_target,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
              // fill: false,
            },
              {
                type: 'bar',
                label: 'Training',
                data: this.training_total,
                backgroundColor: ['rgb(163, 211, 179)','rgb(159, 242, 224)','rgb(237, 194, 193)','rgb(203, 247, 234)','rgb(148, 208, 212)','rgb(168, 244, 168)','rgb(196, 222, 178)','rgb(141, 205, 223)','rgb(191, 209, 255)','rgb(201, 217, 235)','rgb(158, 243, 210)','rgb(225, 193, 202)'],
                borderColor: 'rgba(255,0,255,0.4)',
                
                // fill: false,
              },
            ],
          },
        });

        this.training_chart_month = new Chart('training_month', {
          type: 'bar',
          options: {
            responsive: true,
            plugins: {
              tooltip: {
                callbacks: {
                  footer: footer,
                }
              }
            },
            
            scales:{
              x:{
                beginAtZero: true,
                grid:{
                  display: false
                },
                stacked:true
              },
              y:{
                beginAtZero: true,
                grid:{
                  display: false
                },
                // stacked:true
              }
            }
          },
          data: {
            labels: this.training_label_month,
            datasets: [
              {
                type: 'line',
                label: 'Target',
                data: this.training_target,
                backgroundColor: 'rgba(255,0,255,0.4)',
                borderColor: 'rgba(255,0,255,0.4)',
                // fill: false,
              },
              {
                type: 'bar',
                label: 'Training',
                data: this.training_total_month,
                backgroundColor: ['rgb(203, 247, 234)','rgb(191, 209, 255)','rgb(158, 243, 210)','rgb(225, 193, 202)'],
                borderColor: 'rgba(255,0,255,0.4)',
                // fill: false,
              },
            ],
          },
        })
      }
    )
  }

  // Report Training Detail
  getTrainingDetail(){
    this._service.getTraining(this.year_training).subscribe(
      (data:any)=>{
        this.training_data = data.training_list
        console.log(this.training_data);
      }
    )
  }

  ngOnInit(): void {
    this.getChartTraining();
    this.getTrainingDetail();
  }

}
