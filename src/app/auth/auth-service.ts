import {AuthData} from './auth-data-model';
import {Admin} from './admin.model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Customer} from '../shared/customer.model';
import {User} from 'firebase';


@Injectable()
export class AuthService {
  // this gives indication either we are logged in or logged out.
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  customer: Customer;



  constructor(private router: Router,
              private fireAuth: AngularFireAuth) {

  }
  // for future use, global listener for authenticated user.
  initAuthListener() {
    this.fireAuth.authState.subscribe(admin => {
      if (admin) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/table']);
      } else {
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }


  login(authData: AuthData) {
   return this.fireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
     .then(result => {
       this.initAuthListener();
       console.log(result);

     }).catch(error => {
       console.log(error);
     });
  }

  isAuth() {
    return this.isAuthenticated;
    }

  logOut() {
    this.fireAuth.auth.signOut();
  }
  getAuthState() {
    return this.fireAuth.authState;
  }

}
