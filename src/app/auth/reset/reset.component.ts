import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class ResetPageComponent {
  // 1
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rememberMe: new FormControl(false),
  });
  // tao ham get de lay du lieu
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  // muon xai dc servic thi phai tiem vao constructor
  constructor(private authService: AuthService) {}

  handleSubmit() {
    const userInfo = {
      email: String(this.email?.value),
      password: String(this.password?.value),
    };
    console.log(userInfo);
    // goi api
    this.authService.signIn(userInfo).subscribe({
      next: (res: any) => {
        console.log('Đăng nhập thành công:', res);
        // ví dụ: chuyển hướng, lưu token, v.v.
      },
      error: (err: any) => {
        console.error('Đăng nhập thất bại:', err);
        // hiển thị lỗi lên UI (ví dụ: this.errorMessage = err.error.message)
      },
      complete: () => {
        console.log('Hoàn tất xử lý API đăng nhập');
      },
    });
  }
}
