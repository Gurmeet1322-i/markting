import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component'
import { VerifyOtpComponent } from './auth/verify-otp/verify-otp.component';
import { AUTH_PATH, MAIN_PATHS } from './constants';
import { MainGuard } from './core/auth-guard-service/main.guard';

const routes: Routes = [
  { path: '', redirectTo: AUTH_PATH.SIGN_IN, pathMatch: 'full' },
  { path: AUTH_PATH.SIGN_IN, component: SignInComponent },
  { path: AUTH_PATH.VERIFY_OTP, component: VerifyOtpComponent },
  { path: MAIN_PATHS.MAIN, canActivate: [], loadChildren: () => import('./main/main.module').then((m) => m.MainModule) },
  { path: '**', pathMatch: 'full', redirectTo: AUTH_PATH.SIGN_IN }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
