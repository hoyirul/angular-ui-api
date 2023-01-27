import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { OrderTotal } from 'src/app/models/order-total';
import { OrderService } from 'src/app/services/orders/order.service';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  public chart: any;
  totalOrderByYear: OrderTotal[] = [];
  dataChart: number[] = [];
  labelChart: any[] = [];
  createChartLblDt: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.orderService.getTotalByYear().subscribe((response: OrderTotal[]) => {
      for(let i=0;i<response.length;i++){
        this.labelChart.push(response[i].yearly);
        this.dataChart.push(response[i].total);
      }

      this.chart = new Chart("DoughnutChartJS", {
        type: 'line',
        data: {
          labels: this.labelChart,
          datasets: [{
            label: 'Sales Prices Yearly',
            data: this.dataChart,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
            ],
            borderWidth: 1
          }]
        }
      });
    });
  }
}
