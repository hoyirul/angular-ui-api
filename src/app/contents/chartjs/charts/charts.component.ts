import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  year: any

  onSelected(value: any){
    return this.year = value;
  }

  ngOnInit(): void {

  }
}
