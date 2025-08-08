import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login/login.component';
import { OtpPageComponent } from './auth/otp/otp-page.component';
import { ForgotPageComponent } from './auth/forgot/forgot-password.component';
import { ResetPageComponent } from './auth/reset/reset.component';


const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'forgot-password', component: ForgotPageComponent},
  {path: 'otp', component: OtpPageComponent},
  {path: 'reset', component: ResetPageComponent}
  // apply lazy loading
  // {
  //   path: 'forgot-password',
  //   loadComponent: () => 
  //     import("./auth/forgot/forgot-password.component").then((m) => m.ForgotPageComponent)
  // },
  // {
  //   path: 'otp',
  //   loadComponent: () => 
  //     import("./auth/otp/otp-page.component").then((m) => m.OtpPageComponent)
  // },
  // {
  //   path: 'reset',
  //   loadComponent: () => 
  //     import("./auth/reset/reset.component").then((m) => m.ResetPageComponent)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
