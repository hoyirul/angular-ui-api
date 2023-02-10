import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart }  from 'chart.js/auto';
import { OrderTotalYear } from 'src/app/models/order-year';
import { ProductModel } from 'src/app/models/product-count';
import { OrderService } from 'src/app/services/orders/order.service';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit, OnChanges {
  public chart: any;
  @Input() tahun: string = ''
  productCount: ProductModel[] = [];
  orderTotalYear: OrderTotalYear[] = [];
  labelChart: any[] = [];
  dataChart: number[] = [];
  year: any = 2023
  lblDyn: any = [2022, 2023]
  ylabel: any
  sasa: any[] = []

  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.sasa);;

    console.log(this.tahun);
    for (let i = 0; i <= this.lblDyn.length; i++) {
      if (this.tahun == this.lblDyn[i]) {
        this.dataChart.length = 0;
        this.labelChart.length = 0;
        this.ylabel = 'Testing';
        for (let row of this.sasa) {
          console.log(row.year);
          if (row.year == this.tahun) {
            this.dataChart.push(row.total);
            this.labelChart.push(row.year);
            console.log(row.year);
          }
        }
        this.chart.update();
        break;
      }
      this.ylabel = 'Average Estoque';
    }
  }

  ngOnInit(): void {
    this.createChart();
  }

  createChart(){
    this.orderService.getTotalByYear().subscribe((response: OrderTotalYear[]) => {
      for(let i=0; i < response.length;i++){
        this.labelChart.push(response[i].year);
        this.sasa.push({year: response[i].year, total: response[i].total});
        this.dataChart.push(response[i].total);
      }

      this.chart = new Chart("BarChartJS", {
        type: 'bar',
        data: {
          labels: this.labelChart,
          datasets: [{
            label: 'Count Product By Category',
            data: this.dataChart,
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
