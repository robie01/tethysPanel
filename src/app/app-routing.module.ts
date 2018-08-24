import { NgModule } from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';
import {AddingCustomerComponent} from './shared/adding-customer/adding-customer.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'add-customer', component: AddingCustomerComponent},
  {path: 'test', component: TestComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
