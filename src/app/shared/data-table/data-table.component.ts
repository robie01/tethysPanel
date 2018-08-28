import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Customer} from '../customer.model';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {AngularFirestore} from 'angularfire2/firestore';
import 'rxjs';


import {EditDialogComponent} from '../edit-dialog/edit-dialog.component';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  displayedColumns = ['name', 'address', 'zipCode', 'vat', 'numberOfConsumer', 'memberNumber', 'usageOfWater' , 'edit'];
  dataSource = new MatTableDataSource<Customer>();

  private customerList: Customer[] = [];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerService: CustomerService,
              private db: AngularFirestore,
              private dialog: MatDialog) { }

  ngAfterViewInit() {
    this.db.collection<Customer>('Customer').valueChanges().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Customer>(data);
      this.dataSource.sort = this.sort;
    });
  }



}
