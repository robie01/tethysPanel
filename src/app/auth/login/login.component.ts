import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth-service';
import {UiService} from '../../shared/services/ui.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  private loadingSubs: Subscription;
  constructor(private authService: AuthService,
              private uiService: UiService) {
  }

  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChange.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
      password: new FormControl('', {validators: Validators.required})
    });
  }

  onLogin() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
    console.log(this.loginForm);
  }
  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }
}
