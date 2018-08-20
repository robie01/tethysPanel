import { NgModule } from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
