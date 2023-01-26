import { Component, OnInit } from '@angular/core';
import { Chart }  from 'chart.js/auto';
import { ProductCount } from 'src/app/models/product-count';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  public chart: any;
  productCount: ProductCount[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.productService.getCountProduct().subscribe((response: ProductCount[]) => {
      this.chart = new Chart("BarChartJS", {
        type: 'bar',
        data: {
          labels: ['Foods', 'Drinks', 'Dessert'],
          datasets: [{
            label: 'Count Product By Category',
            data: [response[0].count, response[1].count, response[2].count],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(153, 102, 255)',
              'rgb(54, 162, 235)',
            ],
            borderWidth: 1
          }]
        }
      });
    });
  }
}
