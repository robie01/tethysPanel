import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Customer} from '../shared/customer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns = ['name', 'address', 'vat_number'];
  dataSource = new MatTableDataSource<Customer>();
  constructor() { }

  ngOnInit() {
  }

}
