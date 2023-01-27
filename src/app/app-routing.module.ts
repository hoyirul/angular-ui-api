import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CategoryComponent } from './contents/categories/category/category.component';
import { ChartsComponent } from './contents/chartjs/charts/charts.component';
import { HomeComponent } from './contents/home/home.component';
import { PaymentComponent } from './contents/payment/payment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'payments', component: PaymentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
