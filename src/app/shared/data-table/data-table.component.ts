import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../customer.model';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs';


import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {map} from 'rxjs/internal/operators';
import {DeleteConfirmationDialogComponent} from "../delete-confirmation-dialog/delete-confirmation-dialog.component";


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit{
  displayedColumns = ['name', 'address', 'zipCode', 'vat', 'numberOfConsumer', 'memberNumber', 'active', 'usageOfWater' , 'functions'];
  dataSource = new MatTableDataSource<Customer>();
  customer: Customer;
  text = 'Deactivate';
  customerStatus = {active: true};


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private customerService: CustomerService,
              private db: AngularFirestore,
              private dialog: MatDialog) {


  }

  ngAfterViewInit() {
    this.customerService.getCustomer().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Customer>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
    }


  doFilter(searchValue: string) {
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }

  openDialogEdit(customer) {
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '400px',
      data: customer,
    });
  }


  openDeleteDialog(customer) {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {data: {
        customer: customer,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.customer = result;
    });
  }

  onClickChangeStatus(customer) {
    this.customerService.changeStatus(customer);
    console.log('status changed' + customer);
  }




}
