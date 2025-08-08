import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgotPageComponent } from './auth/forgot/forgot-password.component';
import { OtpPageComponent } from './auth/otp/otp-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgOtpInputModule } from 'ng-otp-input';
import { ResetPageComponent } from './auth/reset/reset.component';

@NgModule({
  // import new component
  declarations: [
    AppComponent,
    LoginPageComponent,
    ForgotPageComponent,
    OtpPageComponent,
    ResetPageComponent
  ],
  // import module
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgOtpInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
