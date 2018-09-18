import {AuthData} from './auth-data-model';
import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UiService} from '../shared/services/ui.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Admin} from './admin.model';





@Injectable()
export class AuthService {
  // this gives indication either we are logged in or logged out.
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  admin: Admin = new Admin();

  test = new Subject();

  constructor(private router: Router,
              private db: AngularFirestore,
              private fireAuth: AngularFireAuth,
              private uiService: UiService) {

  }

  getAdminData(data) {
    this.fireAuth.authState.subscribe(admin => {
      if (admin) {
        this.admin.email = admin.email;
        const adminRef = this.db.collection('admin').doc(admin.uid);
        adminRef.ref.get().then(function (doc) {
          data = doc.data() as Admin;
          console.log('gotcha', data);
        });
      }
    });
  }


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
       this.uiService.showSnackBar(error.message, null, 3000);
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
