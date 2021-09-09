import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MAIN_PATHS } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-boiler-point';
  constructor(
    private router:Router
  ){
    
  }
}
