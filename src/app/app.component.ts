import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {SidenavService} from './sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideNavStatus = true;
  toggle() {
    this.sideNavStatus = !this.sideNavStatus;
  }
}
