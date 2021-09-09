import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth-service';
import { AUTH_APIS, AUTH_PATH, MAIN_PATHS, REGEX } from '../../constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      phone: ['', Validators.compose([Validators.required])]
    })
  }

 submit() {
    this.router.navigate([AUTH_PATH.VERIFY_OTP])
  }
}
