import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { authGuard } from '../core/auth/auth.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: TaskComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'create-task',
        component: CreateTaskComponent,
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
      },
    ],
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
