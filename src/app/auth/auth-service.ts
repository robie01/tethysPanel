import {AuthData} from './auth-data-model';
import {Admin} from './admin.model';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  // this gives indication either we are logged in or logged out.
  authChange = new Subject<boolean>();
  private admin: Admin;

  constructor(private router: Router) {

  }

  login(authData: AuthData) {
    this.admin = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/admin']);
  }

  getUser() {
    return this.admin;
  }
  isAuth() {
    return this.admin !== null;
  }
  logOut() {
    this.admin = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }
}
