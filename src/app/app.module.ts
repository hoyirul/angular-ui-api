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
