import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main.routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main.component';

@NgModule({
    declarations:[
        MainComponent,
        NavbarComponent
    ],
    imports:[
        CommonModule,
        MainRoutingModule
    ],
    providers:[]
})
export class MainModule{}