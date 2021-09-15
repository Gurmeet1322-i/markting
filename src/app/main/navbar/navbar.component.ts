import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AUTH_PATH, UserRute, USER_ROUTES } from 'src/app/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  routes: UserRute[] = USER_ROUTES;
  showLogout = false;
  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.clear();
    this.router.navigate([AUTH_PATH.SIGN_IN]);
  }

  closeBar(){
   let item:any = document.getElementById('check');
   if (item != item.checked) {
    item.click();
  }
  }

}
