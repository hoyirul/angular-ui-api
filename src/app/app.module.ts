import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
