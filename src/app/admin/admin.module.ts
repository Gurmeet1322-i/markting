import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { RouterModule, Routes } from '@angular/router';
import { ADMIN_PATH } from '../constants';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { SharedModuelModule } from '../shared/shared-moduel/shared-moduel.module';


const routes: Routes = [
  {
    path: '', component: AdminMainComponent, children: [
      {
        path: '', redirectTo: ADMIN_PATH.DASHBOARD, pathMatch: 'full'
      },
      {
        path: ADMIN_PATH.DASHBOARD, component: DashboardComponent
      },
      {
        path:ADMIN_PATH.USERS,component:UsersComponent
      }
    ]
  }
]
@NgModule({
  declarations: [AdminMainComponent, SideBarComponent, HeaderComponent, UsersComponent,DashboardComponent],
  imports: [
    CommonModule,
    SharedModuelModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
