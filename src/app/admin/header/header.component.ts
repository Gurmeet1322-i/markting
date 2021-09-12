import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ADMIN_ROUTES, AUTH_PATH, UserRute } from 'src/app/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes:UserRute[]= ADMIN_ROUTES
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toggleDropdown(){
    document.getElementById("userInfo").classList.toggle('show');
  }

  logout(){
    this.router.navigateByUrl(`${AUTH_PATH.SIGN_IN}`);
  }

}
