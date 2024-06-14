import { Component, HostListener } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-menus',
  templateUrl: './all-menus.component.html',
  styleUrls: ['./all-menus.component.scss'],
})
export class AllMenusComponent {
  menusData: any = [];
  isSidebarOpen: boolean = false;
  public getScreenWidth: number;
  constructor(
    private service: SharedDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.service.toogleState$.subscribe((res) => {
      if (res === true) {
        this.isSidebarOpen = true;
      } else {
        this.isSidebarOpen = false;
      }
    });
    this.menusData = this.route.snapshot.data['menus'];
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }

  hideToggle() {
    this.service.show(false);
  }
}
