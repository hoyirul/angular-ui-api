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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', children: [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
  ]},
  { path: 'charts', component: ChartsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'payments', component: PaymentComponent },
  { path: '**', pathMatch: 'full', 
        component: Error404Component || Error500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
