import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../customer.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adding-customer',
  templateUrl: './adding-customer.component.html',
  styleUrls: ['./adding-customer.component.css']
})
export class AddingCustomerComponent implements OnInit {
  addCustomerForm: FormGroup;
  customer: Customer[];


  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.addCustomerForm = new FormGroup({
      name: new FormControl('', {validators: Validators.required}),
      address: new FormControl('', {validators: Validators.required}),
      city: new FormControl('', {validators: Validators.required}),
      zipCode: new FormControl('', {validators: Validators.required}),
      vatNumber: new FormControl('', {validators: Validators.required}),
      numberOfConsumer: new FormControl('', {validators: Validators.required}),
      memberNumber: new FormControl('', {validators: Validators.required}),
      cubicMetersPump: new FormControl('', {validators: Validators.required}),

    });
  }

  onClickSave() {
    const customer = this.customerService.createCustomer({
      name: this.addCustomerForm.value.name,
      address: this.addCustomerForm.value.address,
      zipCode: this.addCustomerForm.value.zipCode,
      city: this.addCustomerForm.value.city,
      vat_number: this.addCustomerForm.value.vatNumber,
      number_of_consumers: this.addCustomerForm.value.numberOfConsumer,
      member_number: this.addCustomerForm.value.memberNumber,
      cubic_meters_pumped: this.addCustomerForm.value.cubicMetersPump,
    });
      this.router.navigateByUrl('/table');
      console.log(customer);
  }

  cancel() {
    this.router.navigateByUrl('/table');
  }

}

// set the customer to active
// navigate to the table page
