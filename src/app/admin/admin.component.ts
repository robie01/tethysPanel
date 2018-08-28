import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Customer} from '../shared/customer.model';
import {CustomerService} from '../shared/services/customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

}
