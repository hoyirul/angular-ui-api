import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxChartsModule }from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { Error404Component } from './aborts/error404/error404.component';
import { Error500Component } from './aborts/error500/error500.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './contents/home/home.component';
import { BarComponent } from './contents/chartjs/bar/bar.component';
import { ChartsComponent } from './contents/chartjs/charts/charts.component';
import { LineComponent } from './contents/chartjs/line/line.component';
import { DoughnutComponent } from './contents/chartjs/doughnut/doughnut.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './contents/categories/category/category.component';
import { PaymentComponent } from './contents/payment/payment.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeUtilityComponent } from './utility/home-utility/home-utility.component';
import { TrainingDetailComponent } from './utility/training-detail/training-detail.component';
import { TrainingDetailService } from './services/tabel-training/training-detail.service';
import { PdmReportComponent } from './utility/pdm-report/pdm-report.component';
import { ElectricityMonthlyComponent } from './utility/electricity-monthly/electricity-monthly.component';
import { AmReportComponent } from './utility/am-report/am-report.component';
import { ElectricityDailyOc1Component } from './utility/electricity-daily-oc1/electricity-daily-oc1.component';
import { ElectricityDailyOc2Component } from './utility/electricity-daily-oc2/electricity-daily-oc2.component';
import { WaterDailyComponent } from './utility/water-daily/water-daily.component';
import { WaterMonthlyComponent } from './utility/water-monthly/water-monthly.component';
import { SteamMonthlyComponent } from './utility/steam-monthly/steam-monthly.component';
import { SteamDailyComponent } from './utility/steam-daily/steam-daily.component';
import { LowpressMonthlyComponent } from './utility/lowpress-monthly/lowpress-monthly.component';
import { LowpressDailyComponent } from './utility/lowpress-daily/lowpress-daily.component';
import { HighpressMonthlyComponent } from './utility/highpress-monthly/highpress-monthly.component';
import { HighpressDailyComponent } from './utility/highpress-daily/highpress-daily.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    Error404Component,
    Error500Component,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    BarComponent,
    ChartsComponent,
    LineComponent,
    DoughnutComponent,
    CategoryComponent,
    PaymentComponent,
    FooterComponent,
    HomeUtilityComponent,
    TrainingDetailComponent,
    PdmReportComponent,
    ElectricityMonthlyComponent,
    AmReportComponent,
    ElectricityDailyOc1Component,
    ElectricityDailyOc2Component,
    WaterDailyComponent,
    WaterMonthlyComponent,
    SteamMonthlyComponent,
    SteamDailyComponent,
    LowpressMonthlyComponent,
    LowpressDailyComponent,
    HighpressMonthlyComponent,
    HighpressDailyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  providers: [TrainingDetailService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
