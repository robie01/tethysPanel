import {Inject, Injectable} from '@angular/core';
import {Customer} from '../customer.model';
import {AngularFirestore} from 'angularfire2/firestore';
import {AuthService} from '../../auth/auth-service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {Admin} from "../../auth/admin.model";
import {forEach} from "@angular/router/src/utils/collection";





@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public customer: Customer;
  public customerList: Observable<Customer[]> = new Observable<Customer[]>();


  constructor(private db: AngularFirestore,
              private authService: AuthService) {
    this.fetchCustomer();
  }

  createCustomer(customer: Customer) {
    const customerCollection = this.db.collection<Customer>('Customer');
    customerCollection.add({
      name: customer.name, address: customer.address, zipCode: customer.zipCode, city: customer.city,
      number_of_consumers: customer.number_of_consumers,
      cubic_meters_pumped: customer.cubic_meters_pumped, member_number: customer.member_number, vat_number: customer.vat_number
    });
  }
  fetchCustomer() {
     // This has been made in data table component.
    this.customerList = this.db.collection<Customer>('Customer').valueChanges();

  }
  // deleting customer
  deleteCustomer() {
  }
  // updating data of customer
  editCustomer() {
  }

}
