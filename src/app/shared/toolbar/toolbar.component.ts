import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth-service';
import {Observable, Subscription} from "rxjs";
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
  admin: Admin = new Admin();



  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      console.log(authStatus);
    });
    this.getImage();
  }

  getImage() {
    this.authSubscription =  this.authService.getAuthState().subscribe(admin => {
      if (admin) {
        this.admin.id = admin.uid;
        console.log(admin);
        const adminRef = this.authService.getDbAdminRef(admin);
        return adminRef.ref.get().then((doc) => {
          this.admin = doc.data() as Admin;
          this.admin.image =  doc.data().image;
          console.log('Found an image', this.admin.image);
        });
      } else {
        console.log('No image found');
        return 'No image found';
      }
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
