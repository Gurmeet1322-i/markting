import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { ConectsComponent } from './conects/conects.component';
import { MAIN_PATHS } from '../constants';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            {
                path: '', redirectTo: MAIN_PATHS.CONTACT_LIST, pathMatch: 'full'
            },
            {
                path: MAIN_PATHS.CONTACT_LIST, component: ConectsComponent
            },
            {
                path: MAIN_PATHS.ACCOUNT, component: AccountComponent
            }
        ]
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }