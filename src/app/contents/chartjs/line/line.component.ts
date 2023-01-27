import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { OrderModel } from 'src/app/models/order-count.model';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  public chart: any;
  productCount: OrderModel[] = [];
  labelChart: any[] = [];
  dataChart: number[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.productService.getCountProductByOrder().subscribe((response: OrderModel[]) => {
      for(let i=0;i<response.length;i++){
        this.labelChart.push(response[i].product.productName);
        this.dataChart.push(response[i].count);
      }

      this.chart = new Chart("LineChartJS", {
        type: 'line', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: this.labelChart, 
          datasets: [{
            label: 'Product Terlaris`',
            data: this.dataChart,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            borderWidth: 1
          }],
        },
        options: {
          // aspectRatio: 1
        }
      });
    });
  }
}
