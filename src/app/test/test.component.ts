import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../shared/services/customer.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  testForm: FormGroup;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.testForm = new FormGroup({
      name: new FormControl('', {validators: Validators.required}),
      address: new FormControl('', {validators: Validators.required}),
    });
  }
}

//   onClick() {
//     this.customerService.createCustomer({
//       name: this.testForm.value.name,
//       address: this.testForm.value.address,
//       vat_number: this.testForm.value.vatNumber
//     });
//     console.log(this.testForm);
//   }
//
// }
