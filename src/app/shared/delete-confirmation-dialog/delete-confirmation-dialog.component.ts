import {Component, Inject, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {CustomerService} from '../services/customer.service';


@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.css']
})
export class DeleteConfirmationDialogComponent implements OnInit {

  customer: Customer;


  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any,
              private customerService: CustomerService) { }

  ngOnInit() {
    console.log(this.passedData);
    this.customer = this.passedData.customer;
  }

  yesDelete(customer) {
      this.customerService.deleteCustomer(customer.customerId);
      console.log('delete' + customer);
  }
}
