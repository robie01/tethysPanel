import {AuthData} from './auth-data-model';
import {Admin} from './admin.model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {Customer} from '../shared/customer.model';
import {User} from 'firebase';
import {MatSnackBar} from '@angular/material';
import {UiService} from '../shared/services/ui.service';


@Injectable()
export class AuthService {
  // this gives indication either we are logged in or logged out.
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  customer: Customer;



  constructor(private router: Router,
              private fireAuth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private uiService: UiService) {

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
    this.uiService.loadingStateChange.next(true);
   return this.fireAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
     .then(result => {
       this.uiService.loadingStateChange.next(false);
       this.initAuthListener();
       console.log(result);

     }).catch(error => {
       this.uiService.loadingStateChange.next(false);
       this.snackBar.open(error.message, null, {
         duration: 3000
       });
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
