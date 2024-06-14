import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { SharedModule } from "../shared/shared.module";
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        TaskComponent,
        CreateTaskComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        TaskRoutingModule,
        SharedModule
    ]
})
export class TaskModule { }
