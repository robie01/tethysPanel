import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  customer: Customer;


  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public passedData: any,
              private customerService: CustomerService) { }

  ngOnInit() {
    console.log(this.passedData);
    this.customer = this.passedData.customer;

  }

  confirmDelete(customer) {
      this.customerService.deleteCustomer(customer.customerId);
      this.cancelDelete(customer);
      this.customerService.getCustomer();
      console.log('delete' + customer);
  }

  cancelDelete(customer) {
    this.dialogRef.close(customer);
  }
}
