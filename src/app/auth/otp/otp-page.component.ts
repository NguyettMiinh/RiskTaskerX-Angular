import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgOtpInputModule } from 'ng-otp-input';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgOtpInputModule, RouterModule]
})
export class OtpPageComponent {
  forgotForm = new FormGroup({
    email: new FormControl(''),
  });
  handleSubmit() {
    console.log(this.forgotForm.value);
  }
}
