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
  admin: Admin = new Admin();


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
      console.log(authStatus);
    });
    this.getImage();
    // this.admin.image = 'data:image/png;base64,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';
    this.admin.image = 'https://firebasestorage.googleapis.com/v0/b/tethys-adminpanel.appspot.com/o/photos%2FnoImage.png?alt=media&token=3f987b2b-740a-4d4c-bef8-2b49c4405832';
  }

  getImage() {
    this.authSubscription =  this.authService.getAuthState().subscribe(admin => {
      if (admin) {
        this.admin.id = admin.uid;
        console.log(admin);
        const adminRef = this.authService.getDbAdminRef(admin);
        return adminRef.ref.get().then((doc) => {
          this.admin = doc.data() as Admin;
          if (this.admin.image) {
            this.admin.image =  doc.data().image;
          }
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
