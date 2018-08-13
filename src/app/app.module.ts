import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIcon, MatIconModule, MatSidenavModule, MatTableModule} from '@angular/material';
import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AdminComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
