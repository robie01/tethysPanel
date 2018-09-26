import {AuthData} from './auth-data-model';
import { Subject} from 'rxjs';
import {Inject, Injectable, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {UiService} from '../shared/services/ui.service';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Admin} from './admin.model';




@Injectable()
export class AuthService {
  // this gives indication either we are logged in or logged out.
  authChange = new Subject<boolean>();

  private isAuthenticated = false;



  private imageRef: AngularFirestoreCollection<Admin>;

  constructor(private router: Router,
              private db: AngularFirestore,
              private fireAuth: AngularFireAuth,
              private uiService: UiService) {
    this.imageRef = this.db.collection<Admin>('admin/');

  }

  getDbAdminRef(admin) {
    return this.imageRef.doc(admin.uid);
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
