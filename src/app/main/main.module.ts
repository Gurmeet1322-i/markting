import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { ConectsComponent } from './conects/conects.component';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
    declarations:[
        MainComponent,
        NavbarComponent,
        ConectsComponent,
        AccountComponent,
        PaymentComponent
    ],
    imports:[
        CommonModule,
        MainRoutingModule,
        GooglePayButtonModule
    ],
    providers:[]
})
export class MainModule{}