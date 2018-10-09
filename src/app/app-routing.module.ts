import { NgModule } from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {AddingCustomerComponent} from './shared/adding-customer/adding-customer.component';
import {TestComponent} from './test/test.component';
import {DataTableComponent} from './shared/data-table/data-table.component';
import {MaterialDashboardComponent} from './material-dashboard/material-dashboard.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '', component: MaterialDashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-customer', component: AddingCustomerComponent},
  {path: 'test', component: TestComponent},
  {path: 'table', component: DataTableComponent, canActivate: [AuthGuard]},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
