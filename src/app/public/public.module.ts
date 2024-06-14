import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    PublicComponent,
    DashboardComponent,
    UnauthorizedComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class PublicModule { }
