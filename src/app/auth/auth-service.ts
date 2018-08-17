import {AuthData} from './auth-data-model';
import {Admin} from './admin.model';
import {Subject} from 'rxjs';

export class AuthService {
  // this gives indication either we are logged in or logged out.
  authChange = new Subject<boolean>();
  private admin: Admin;

  login(authData: AuthData) {
    this.admin = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    this.authChange.next(true);
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
  }
}
