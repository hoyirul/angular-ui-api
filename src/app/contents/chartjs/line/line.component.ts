import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductCount } from 'src/app/models/product-count';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {
  public chart: any;
  productCount: ProductCount[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.productService.getCountProductByOrder().subscribe((response: ProductCount[]) => {
      this.chart = new Chart("LineChartJS", {
        type: 'line', //this denotes tha type of chart
  
        data: {// values on X-Axis
          labels: ['Dimsum Udang', 'Udang Keju', 'Hakao','Lemon Tea',
                   'Gulali'], 
          datasets: [{
            label: 'Product Terlaris`',
            data: [response[0].count, response[1].count, response[2].count, response[3].count, response[4].count],
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
