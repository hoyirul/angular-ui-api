import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // UTILITY -> Energy Performance -> electricity, steam, lowpress, highpress, resume, downtime -> Monthly Daily
  performance: boolean = false;
  electricity_performance: boolean = false;
  steam_performance: boolean = false;
  lowpress_performance: boolean = false;
  highpress_performance: boolean = false;
  resume_performance: boolean = false;
  downtime_performance: boolean = false;
  
  // UTILITY -> Maintenance Report -> Shift report, energy report, pdm report, training, am, pm report
  maintenance: boolean = false;


  // UTILITY -> Monitoring Report -> Critical Machine, Big 5 Alarm, Machine Learning
  monitoring: boolean = false;
  critical: boolean = false;
  bigFive: boolean = false;
  machine_learning: boolean = false;

  // ENERGY -> Energy Source, Machine SEU, Emission, TOE
  energySource: boolean = false;
  machine: boolean = false;
  emission: boolean = false;
  toe: boolean = false;

  // EHS
  ehs: boolean = false;

  // Sub Menu Energy Performance
  performanceDropdown(){
    this.performance = !this.performance;
    if(this.performance){
      this.maintenance = false;
      this.monitoring = false;
    }
  }
  // Sub-sub Menu Electricity
  electricityPerformance(){
    this.electricity_performance =!this.electricity_performance;
    if(this.electricity_performance){
      this.steam_performance = false;
      this.lowpress_performance = false;
      this.highpress_performance = false;
      this.resume_performance = false;
      this.downtime_performance = false;
    }
  }
  // Sub-sub Menu Steam
  steamPerformance(){
    this.steam_performance =!this.steam_performance;
    if(this.steam_performance){
      this.electricity_performance = false;
      this.lowpress_performance = false;
      this.highpress_performance = false;
      this.resume_performance = false;
      this.downtime_performance = false;
    }
  }
  // Sub-sub Menu lowpress
  lowpressPerformance(){
    this.lowpress_performance =!this.lowpress_performance;
    if(this.lowpress_performance){
      this.steam_performance = false;
      this.electricity_performance = false;
      this.highpress_performance = false;
      this.resume_performance = false;
      this.downtime_performance = false;
    }
  }
  // Sub-sub Menu highpress
  highpressPerformance(){
    this.highpress_performance =!this.highpress_performance;
    if(this.highpress_performance){
      this.electricity_performance = false;
      this.lowpress_performance = false;
      this.steam_performance = false;
      this.resume_performance = false;
      this.downtime_performance = false;
    }
  }
  // Sub-sub Menu resume
  resumePerformance(){
    this.resume_performance =!this.resume_performance;
    if(this.resume_performance){
      this.electricity_performance = false;
      this.lowpress_performance = false;
      this.steam_performance = false;
      this.highpress_performance = false;
      this.downtime_performance = false;
    }
  }
  // Sub-sub Menu downtime
  downtimePerformance(){
    this.downtime_performance =!this.downtime_performance;
    if(this.downtime_performance){
      this.steam_performance = false;
      this.electricity_performance = false;
      this.highpress_performance = false;
      this.resume_performance = false;
      this.lowpress_performance = false;
    }
  }

  // Sub Menu Maintenance 
  maintenanceDropdown(){
    this.maintenance = !this.maintenance;
    if(this.maintenance){
      this.performance = false;
      this.monitoring = false;
    }
  }
  // Sub Menu Monitoring 
  monitoringDropdown(){
    this.monitoring = !this.monitoring;
    if(this.monitoring){
      this.performance = false;
      this.maintenance = false;
    }
  }
  // Sub-sub Menu Monitoring Critical
  criticalDropdown(){
    this.critical = !this.critical;
  }
  // Sub-sub Menu Monitoring big Five
  bigFivelDropdown(){
    this.bigFive = !this.bigFive;
  }
  // Sub-sub Menu Monitoring Machine Learning
  machineLearningDropdown(){
    this.machine_learning = !this.machine_learning;
  }
  // Sub Menu energySource
  energySourceDropdown(){
    this.energySource = !this.energySource;
  }
  // 
  machineDropdown(){
    this.machine = !this.machine;
  }
  // Menu EHS
  ehsDropdown(){
    this.ehs = !this.ehs;
  }
  
  ngOnInit(): void {
    
  }
}
