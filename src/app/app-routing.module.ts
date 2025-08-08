import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login.component';
import { ForgotPageComponent } from './auth/forgot/forgot-password.component';
import { OtpPageComponent } from './auth/otp/otp-page..component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  
  {path: 'forgot-password', component: ForgotPageComponent},
  {path: 'otp', component: OtpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
