import { Injectable } from '@angular/core';
import {Customer} from '../customer.model';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[];


  constructor(private db: AngularFirestore) { }
  createCustomer(customer: Customer) {
    const customerCollection = this.db.collection<Customer>('Customer');
    customerCollection.add({
      name: customer.name, address: customer.address, zipCode: customer.zipCode, city: customer.city,
      number_of_consumers: customer.number_of_consumers,
      cubic_meters_pumped: customer.cubic_meters_pumped, member_number: customer.member_number, vat_number: customer.vat_number
    });
  }
  fetchCustomer() {
    // this.db.collection<Customer>('Customer').valueChanges().subscribe(data => {
    //   this.customers = data;
    // });
  }
  // deleting customer
  deleteCustomer() {
  }
  // updating data of customer
  updateCustomer() {
  }
}
