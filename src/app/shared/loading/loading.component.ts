import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { CommonService } from '../services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  showSpinner: boolean = false;
  private spinnerSubscription: Subscription;

  constructor(
    private commonService: CommonService,
    private spinner: NgxSpinnerService
  ) {
    this.spinnerSubscription = this.commonService.spinnerState$.subscribe(
      (state) => {
        this.showSpinner = state;
        if (this.showSpinner) {
          this.spinner.show(undefined, {
            type: 'ball-newton-cradle',
            fullScreen: true,
            bdColor:"rgba(0, 0, 0, 0.8)",
            size:"medium",
            color:"#fff",
          });
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }
}
