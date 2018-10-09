import {Inject, Injectable, OnInit} from '@angular/core';
import {Customer} from '../customer.model';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AuthService} from '../../auth/auth-service';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {UiService} from './ui.service';



@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {
  customer: Customer;
  customerList: Observable<Customer[]>;

  customerCollectionRef: AngularFirestoreCollection<Customer>;
  // reference doc to my delete method customer, specifying the document in firebase.
  customerDoc: AngularFirestoreDocument<Customer>;


  constructor(private db: AngularFirestore,
              private authService: AuthService,
              private uiService: UiService) {

    this.customerCollectionRef = this.db.collection('customer');
    this.getCustomer();
  }

  ngOnInit() {
  }

  createCustomer(customer: Customer) {
      this.customerCollectionRef.add(customer).then((customerRef) => {
        this.customerCollectionRef.doc(customerRef.id).update({
          customerId: customerRef.id,
          active: true,
          created_at: new Date(),
        });
      }).catch((err) => {
        console.log(err);
      });
    }

  // getting the object in firebase with meta data as Customer.
  getCustomer() {
    this.customerList = this.customerCollectionRef.snapshotChanges().map(changes => {
      return changes.map(a => {
        this.customer = a.payload.doc.data() as Customer;
        const id = this.customer.customerId;
        const date = this.customer.created_at;
        return {id, ...this.customer, date};
      });
    });
    return this.customerList;
  }
  // deleting customer
  deleteCustomer(customer: Customer) {
   this.customerDoc = this.db.doc('/customer/' + customer);
   this.customerDoc.delete();
  }
  editCustomer(customer: Customer) {
    this.customerCollectionRef.doc(customer.customerId).update(customer).then(() => {
      console.log('updated');
    }).catch((err) => {
      console.log(err);
    });
  }
  changeStatus(customer: Customer) {
     customer.active = !customer.active;
     this.db.doc('customer/' + customer.customerId).update(customer).then(() => {
      console.log('status is change');
    }).catch(error => {
      console.log(error);
    });
  }



}
