import { Component, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menuTemplate: any;
  public getScreenWidth: number;
  headerData: any = [];
  userDetails = JSON.parse(localStorage.getItem('user') as string);
  constructor(
    private auth: AuthService,
    private service: SharedDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.headerData = this.route.snapshot.data['headerName'];
  }
  logOut() {
    this.auth.logout();
  }
@HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
}
