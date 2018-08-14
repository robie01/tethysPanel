import { NgModule } from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './auth/login/login.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent}

]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
