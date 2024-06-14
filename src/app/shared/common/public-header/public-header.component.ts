import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.scss'],
})
export class PublicHeaderComponent {
  userDetails = JSON.parse(localStorage.getItem('user') as string);
  constructor(private auth: AuthService, public router: Router) {}
  logOut() {
    this.auth.logout();
  }
}
