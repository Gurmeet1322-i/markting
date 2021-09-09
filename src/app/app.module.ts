import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { InterceptorService } from './core/services/interceptor-service';
import { ToastrModule } from 'ngx-toastr';
import { VerifyOtpComponent } from './auth/verify-otp/verify-otp.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SpinnerComponent,
    VerifyOtpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      tapToDismiss:true,
      progressAnimation:'increasing',
      closeButton:true,
      timeOut:2000
    })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
