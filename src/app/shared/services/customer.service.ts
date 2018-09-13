import {Inject, Injectable, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {AuthService} from '../../auth/auth-service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer: Customer;
  customerList: Observable<Customer[]>;
  customerCollectionRef: AngularFirestoreCollection<Customer>;
  customerDoc: AngularFirestoreDocument<Customer>;


  constructor(private db: AngularFirestore,
              private authService: AuthService) {

    this.customerCollectionRef = this.db.collection('customer');

    this.customerList = this.customerCollectionRef.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Customer;
        data.customerId = a.payload.doc.id;
        return data;
      });
    });
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


  getCustomer() {
    return this.customerList;
  }
  // deleting customer
  deleteCustomer(customer: Customer) {
   this.customerDoc = this.db.doc('/customer/' + customer);
   this.customerDoc.delete();
  }


  updateCustomer(customer: Customer) {
    console.log('customer', customer);
    this.customerCollectionRef.doc(customer.customerId).update(customer).then(() => {
      console.log('updated');
    });


  }


}
