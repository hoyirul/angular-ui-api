import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './aborts/error404/error404.component';
import { Error500Component } from './aborts/error500/error500.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CategoryComponent } from './contents/categories/category/category.component';
import { ChartsComponent } from './contents/chartjs/charts/charts.component';
import { HomeComponent } from './contents/home/home.component';
import { PaymentComponent } from './contents/payment/payment.component';

// MAIN DASHBOARD
import { HomeUtilityComponent } from './utility/home-utility/home-utility.component';
// UTILITY - PERFORMANCE
import { WaterMonthlyComponent } from './utility/water-monthly/water-monthly.component';
import { WaterDailyComponent } from './utility/water-daily/water-daily.component';
import { ElectricityMonthlyComponent } from './utility/electricity-monthly/electricity-monthly.component';
import { ElectricityDailyOc1Component } from './utility/electricity-daily-oc1/electricity-daily-oc1.component';
import { ElectricityDailyOc2Component } from './utility/electricity-daily-oc2/electricity-daily-oc2.component';
import { SteamMonthlyComponent } from './utility/steam-monthly/steam-monthly.component';
import { SteamDailyComponent } from './utility/steam-daily/steam-daily.component';
// UTILITY - REPORT
import { PdmReportComponent } from './utility/pdm-report/pdm-report.component';
import { TrainingDetailComponent } from './utility/training-detail/training-detail.component';
import { AmReportComponent } from './utility/am-report/am-report.component';
import { LowpressMonthlyComponent } from './utility/lowpress-monthly/lowpress-monthly.component';
import { LowpressDailyComponent } from './utility/lowpress-daily/lowpress-daily.component';
import { HighpressMonthlyComponent } from './utility/highpress-monthly/highpress-monthly.component';
import { HighpressDailyComponent } from './utility/highpress-daily/highpress-daily.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
  ]},

  // MAIN DASHBOARD
  { path: 'home-utility', component: HomeUtilityComponent },
  // UTILITY - PERFORMANCE  
  { path: 'water-monthly', component: WaterMonthlyComponent },
  { path: 'water-daily', component: WaterDailyComponent },
  { path: 'electricity-monthly', component: ElectricityMonthlyComponent },
  { path: 'electricity-daily-oc1', component: ElectricityDailyOc1Component },
  { path: 'electricity-daily-oc2', component: ElectricityDailyOc2Component },
  { path: 'steam-monthly', component: SteamMonthlyComponent },
  { path: 'steam-daily', component: SteamDailyComponent },
  { path: 'lowpress-monthly', component: LowpressMonthlyComponent },
  { path: 'lowpress-daily', component: LowpressDailyComponent },
  { path: 'highpress-monthly', component: HighpressMonthlyComponent },
  { path: 'highpress-daily', component: HighpressDailyComponent },
  // UTILITY - REPORT
  { path: 'training-detail', component: TrainingDetailComponent},
  { path: 'pdm-report',component:PdmReportComponent},
  { path: 'am-report',component:AmReportComponent},

  // CONTENTS
  { path: 'charts', component: ChartsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'payments', component: PaymentComponent },
  { path: '**', pathMatch: 'full', component: Error404Component || Error500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
