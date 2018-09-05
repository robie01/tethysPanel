import {Inject, Injectable, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AuthService} from '../../auth/auth-service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {
  customer: Customer;
  public customerList: Observable<Customer[]> = new Observable<Customer[]>();
  customerCollectionRef: AngularFirestoreCollection<any> =  this.db.collection('/Customer/');


  constructor(private db: AngularFirestore,
              private authService: AuthService) {
    this.fetchCustomer();
  }

  ngOnInit() {

  }
  createCustomer(customer: Customer) {
    this.customerCollectionRef.add(customer).then((customerRef) => {
      this.customerCollectionRef.doc(customerRef.id).update({
        customerId: customerRef.id
      });
    }).catch((err) => {
      console.log(err);
    });
  }


  fetchCustomer() {
    this.customerList = this.db.collection<Customer>('Customer').valueChanges();

  }
  // deleting customer
  deleteCustomer(customer: Customer) {
    this.customerCollectionRef.doc(customer.customerId).delete().then(() => {
      console.log('deleted');
    });
  }


  updateCustomer(customer: Customer) {
    console.log('customer', customer);
    this.customerCollectionRef.doc(customer.customerId).update(customer);


  }


}
