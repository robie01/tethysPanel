import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../auth/auth-service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Output() navToggle = new EventEmitter();
  isAuth = false;
  authSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
     this.isAuth = authStatus;
    });
  }
  toggleSidenav() {
    this.navToggle.emit();
    console.log('click');
  }
  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
