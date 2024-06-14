import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PublicHeaderComponent } from './common/public-header/public-header.component';
import { PublicFooterComponent } from './common/public-footer/public-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './common/header/header.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DeleteConfirmPopupComponent } from './delete-confirm-popup/delete-confirm-popup.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TooltipModule  } from 'ngx-bootstrap/tooltip';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { LoadingComponent } from './loading/loading.component'
import { NgxSpinnerModule } from 'ngx-spinner';
import { AllMenusComponent } from './all-menus/all-menus.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ConfirmPopupComponent } from './confirm-popup/confirm-popup.component';
import { NgxGaugeModule } from 'ngx-gauge';

@NgModule({
  declarations: [
    PublicHeaderComponent,
    PublicFooterComponent,
    HeaderComponent,
    BootstrapTableComponent,
    DeleteConfirmPopupComponent,
    LoadingComponent,
    AllMenusComponent,
    ConfirmPopupComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxPaginationModule ,
    TooltipModule,
    SelectDropDownModule,
    NgxSpinnerModule,
    ModalModule.forRoot(),
    NgMultiSelectDropDownModule.forRoot(),
    NgxGaugeModule
  ],
  exports: [
    PublicHeaderComponent,
    PublicFooterComponent,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    BootstrapTableComponent,
    AngularSvgIconModule,
    ModalModule,
    NgxPaginationModule,
    TooltipModule,
    SelectDropDownModule,
    NgxSpinnerModule,
    LoadingComponent,
    AllMenusComponent,
    NgMultiSelectDropDownModule,
    NgxGaugeModule
  ],
})
export class SharedModule {}
