import { NgModule } from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: '', component: HomeComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
