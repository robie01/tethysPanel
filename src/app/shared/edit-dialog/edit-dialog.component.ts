import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../customer.model';
import {FormControl, FormGroup} from '@angular/forms';
import {AngularFirestore} from 'angularfire2/firestore';

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
      name: new FormControl(''),
      address: new FormControl(''),
      zipCode: new FormControl(''),
      city: new FormControl(''),
      number_of_consumers: new FormControl('')
    });
  }

  ngOnInit() {
    console.log(this.data);
    this.customer = this.data;
  }

  closeDialog() {
    this.dialogRef.close();
  }


  saveCustomer(): void {
    this.db.collection('Customer').doc(this.data.uid).update({name: this.customer.name});
    this.dialogRef.close();
    console.log('click' + name);
  }

}
