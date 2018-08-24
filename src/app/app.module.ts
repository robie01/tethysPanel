import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';

import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthService} from './auth/auth-service';
import {CdkTableModule} from '@angular/cdk/table';
import { AddingCustomerComponent } from './shared/adding-customer/adding-customer.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthGuard} from './auth/auth.guard';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    AddingCustomerComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule,
    CdkTableModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatGridListModule




  ],
  providers: [AuthService, AngularFirestore, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
