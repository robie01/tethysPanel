import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from './auth/auth-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sideNavStatus = false;
  isAuth = false;
  constructor (private authService: AuthService) {
  }

  ngOnInit() {
    // this.authService.initAuthListener();
    this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }
  toggle() {
    this.sideNavStatus = !this.sideNavStatus;
  }
}
