import {Component, Inject, OnInit} from '@angular/core';
import {getMatIconFailedToSanitizeLiteralError, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../customer.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';
import {clearImmediate} from "timers";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  customer: Customer;
  editForm: FormGroup;


  constructor(private customerService: CustomerService,
              private db: AngularFirestore,
              public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.editForm = new FormGroup({
      name: new FormControl(this.data.name),
      address: new FormControl(this.data.address),
      zipCode: new FormControl(this.data.zipCode),
      city: new FormControl(this.data.city),
      number_of_consumers: new FormControl(this.data.number_of_consumers)
    });
  }

  ngOnInit() {
    console.log(this.data);
    this.customer = this.data;
  }

  closeDialog() {
      this.dialogRef.close();
  }


  saveUpdateCustomer() {
    this.customerService.updateCustomer({
      name: this.editForm.value.name,
      address: this.editForm.value.address,
      zipCode: this.editForm.value.zipCode,
      city: this.editForm.value.city,
      number_of_consumers: this.editForm.value.number_of_consumers,
      customerId: this.customer.customerId
    });
  }


}
