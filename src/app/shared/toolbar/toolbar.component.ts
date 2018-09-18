import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth-service';
import {Observable, Subscription} from 'rxjs';
import {Admin} from '../../auth/admin.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Output() navToggle = new EventEmitter();
  isAuth = false;
  authSubscription: Subscription;
  adminInfo: Admin;


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
     this.isAuth = authStatus;
     this.authService.getAdminData(this.adminInfo);
    });
  }
  toggleSidenav() {
    this.navToggle.emit();
    console.log('click');
  }
  logout() {
    this.authService.logOut();
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }


}
