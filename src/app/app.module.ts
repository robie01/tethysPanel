import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MAT_DIALOG_DATA,
  MatButtonModule,
  MatCardModule, MatDialogModule,
  MatDialogRef,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

import { AdminComponent } from './admin/admin.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthService} from './auth/auth-service';
import {CdkTableModule} from '@angular/cdk/table';
import { AddingCustomerComponent } from './shared/adding-customer/adding-customer.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import {AuthGuard} from './auth/auth.guard';
import { TestComponent } from './test/test.component';
import {CustomerService} from './shared/services/customer.service';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { EditDialogComponent } from './shared/edit-dialog/edit-dialog.component';
import { DeleteConfirmationDialogComponent } from './shared/delete-confirmation-dialog/delete-confirmation-dialog.component';
import {UiService} from './shared/services/ui.service';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AdminComponent,
    LoginComponent,
    AddingCustomerComponent,
    TestComponent,
    DataTableComponent,
    EditDialogComponent,
    DeleteConfirmationDialogComponent,
    MaterialDashboardComponent,

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
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MatGridListModule,
    MatSortModule,
    MatPaginatorModule,
    MatListModule,
    FlexLayoutModule,
    AngularFirestoreModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    LayoutModule


  ],
  providers: [AuthService,
    AngularFirestore,
    AuthGuard,
    CustomerService,
    UiService,
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent, DeleteConfirmationDialogComponent]
})
export class AppModule { }
