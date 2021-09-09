import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAIN_PATHS } from 'src/app/constants';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent implements OnInit {
  @ViewChild('first') first:ElementRef;
  @ViewChild('second') second:ElementRef;
  @ViewChild('third') third:ElementRef;
  @ViewChild('forth') forth:ElementRef;
  OtpForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.OtpForm = this.fb.group({
      one: ['', Validators.required],
      two: ['', Validators.required],
      three: ['', Validators.required],
      four: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submit(){
    this.router.navigate([MAIN_PATHS.MAIN]);
  }

  input(event){
    if(this.OtpForm.value.one.length==1){
      this.second.nativeElement.focus();
    }else{
      this.first.nativeElement.focus();
    }

    if(this.OtpForm.value.two.length==1){
      this.third.nativeElement.focus();
    }else{
      this.second.nativeElement.focus();
    }

    if(this.OtpForm.value.three.length==1){
      this.forth.nativeElement.focus();
    }else{
      this.third.nativeElement.focus();
    }
  }

}
