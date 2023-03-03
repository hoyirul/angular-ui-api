import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // Menu Utility
  utility: boolean = false;

  // Sub Menu Energy Performance Monthly Daily, Maintenance, Critical
  performance: boolean = false;
  monthly_performance: boolean = false;
  daily_performance: boolean = false;
  maintenance: boolean = false;
  monitoring: boolean = false;
  critical: boolean = false;
  bigFive: boolean = false;
  machine_learning: boolean = false;

  // Menu Energy
  energy: boolean = false;

  // Sub Menu Energy Source, Machine SEU, Emission, TOE
  energySource: boolean = false;
  machine: boolean = false;
  emission: boolean = false;
  toe: boolean = false;

  // Menu EHS
  ehs: boolean = false;

  // Menu Utility
  utilityDropdown(){
    this.utility = !this.utility;
  }
  // Sub Menu Energy Performance
  performanceDropdown(){
    this.performance = !this.performance;
    if(this.performance){
      this.maintenance = false;
      this.monitoring = false;
    }
  }
  // Sub-sub Menu Energy Performance Monthly
  monthlyPerformance(){
    this.monthly_performance =!this.monthly_performance;
    if(this.monthly_performance){
      this.daily_performance = false;
    }
  }
  // Sub-sub Menu Energy Performance Daily
  dailyPerformance(){
    this.daily_performance =!this.daily_performance;
    if(this.daily_performance){
      this.monthly_performance = false;
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

  // Menu Energy
  energyDropdown(){
    this.energy = !this.energy;
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
