import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  ngOnInit(): void {
  }

  // UTILITY -> Energy Performance -> water, electricity, steam, lowpress, highpress, resume, downtime -> Monthly Daily
  performance: boolean = false;
  water: boolean = false;
  electricity: boolean = false;
  steam: boolean = false;
  lowpress: boolean = false;
  highpress: boolean = false;
  resume: boolean = false;
  downtime: boolean = false;
  
  // UTILITY -> Maintenance Report -> Shift report, energy report, pdm report, training, am, pm report
  report: boolean = false;
  energy_report: boolean = false;

  // UTILITY -> Monitoring Report -> Critical Machine, Big 5 Alarm, Machine Learning
  monitoring: boolean = false;

  // ENERGY -> Energy Source, Machine SEU, Emission, TOE
  energy_source: boolean = false;
  machine: boolean = false;

  // EHS -> PerformaWWTP, Klinik Report dll
  wwtp: boolean = false;
  klinik: boolean = false;

  // Sub-sub Menu water
  waterPerformance(){
    this.water =!this.water;
    if(this.water){
      this.steam = false;
      this.electricity = false;
      this.lowpress = false;
      this.highpress = false;
      this.resume = false;
      this.downtime = false;
    }
  }
  // Sub-sub Menu Electricity
  electricityPerformance(){
    this.electricity =!this.electricity;
    if(this.electricity){
      this.water = false;
      this.steam = false;
      this.lowpress = false;
      this.highpress = false;
      this.resume = false;
      this.downtime = false;
    }
  }
  // Sub-sub Menu Steam
  steamPerformance(){
    this.steam =!this.steam;
    if(this.steam){
      this.water = false;
      this.electricity = false;
      this.lowpress = false;
      this.highpress = false;
      this.resume = false;
      this.downtime = false;
    }
  }
  // Sub-sub Menu lowpress
  lowpressPerformance(){
    this.lowpress =!this.lowpress;
    if(this.lowpress){
      this.water = false;
      this.steam = false;
      this.electricity = false;
      this.highpress = false;
      this.resume = false;
      this.downtime = false;
    }
  }
  // Sub-sub Menu highpress
  highpressPerformance(){
    this.highpress =!this.highpress;
    if(this.highpress){
      this.water = false;
      this.electricity = false;
      this.lowpress = false;
      this.steam = false;
      this.resume = false;
      this.downtime = false;
    }
  }
  // Sub-sub Menu resume
  resumePerformance(){
    this.resume =!this.resume;
    if(this.resume){
      this.water = false;
      this.electricity = false;
      this.lowpress = false;
      this.steam = false;
      this.highpress = false;
      this.downtime = false;
    }
  }
  // Sub-sub Menu downtime
  downtimePerformance(){
    this.downtime =!this.downtime;
    if(this.downtime){
      this.water = false;
      this.steam = false;
      this.electricity = false;
      this.highpress = false;
      this.resume = false;
      this.lowpress = false;
    }
  }

  // Sub Menu Energy Performance
  performanceDropdown(){
    this.performance = !this.performance;
    if(this.performance){
      this.report = false;
      this.monitoring = false;
      this.machine = false;
      this.energy_source = false;
      this.klinik=false;
      this.wwtp=false;
    }
  }
  // Sub Menu report 
  reportDropdown(){
    this.report = !this.report;
    if(this.report){
      this.performance = false;
      this.monitoring = false;
      this.energy_source = false;
      this.machine = false;
      this.klinik=false;
      this.wwtp=false;
    }
  }
  // Sub Menu Monitoring 
  monitoringDropdown(){
    this.monitoring = !this.monitoring;
    if(this.monitoring){
      this.performance = false;
      this.report = false;
      this.energy_source = false;
      this.machine = false;
      this.klinik=false;
      this.wwtp=false;
    }
  }

  // Sub Menu energy_source 
  energySourceDropdown(){
    this.energy_source = !this.energy_source;
    if(this.energy_source){
      this.performance = false;
      this.report = false;
      this.monitoring = false;
      this.machine = false;
      this.klinik=false;
      this.wwtp=false;
    }
  }
  // Sub Menu machine 
  machineSeuDropdown(){
    this.machine = !this.machine;
    if(this.machine){
      this.energy_source = false;
      this.performance = false;
      this.report = false;
      this.monitoring = false;
      this.klinik=false;
      this.wwtp=false;
    }
  }

  // Menu EHS
  wwtpDropdown(){
    this.wwtp = !this.wwtp;
    if(this.wwtp){
      this.machine = false;
      this.energy_source = false;
      this.performance = false;
      this.report = false;
      this.monitoring = false;
      this.klinik=false;
    }
  }
 
  klinikDropdown(){
    this.klinik = !this.klinik;
    if(this.klinik){
      this.wwtp = false;
      this.machine = false;
      this.energy_source = false;
      this.performance = false;
      this.report = false;
      this.monitoring = false;
    }
  }
}
