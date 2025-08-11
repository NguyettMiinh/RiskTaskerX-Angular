import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { LoginRequest } from "src/app/share/types/auth";



@Component({
    selector: 'app-login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule,RouterModule]
    
})

export class LoginPageComponent {
    // 1
    loginForm = new FormGroup({
        email: new FormControl('',[Validators.required, Validators.email]),
        password: new FormControl('',[Validators.required, Validators.minLength(8)]),
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
    constructor(private authService: AuthService, private router: Router){}

    handleSubmit() {
        const userInfo : LoginRequest = {
            email: String(this.email?.value),
            password: String(this.password?.value),

        }
        console.log(userInfo);
        // goi api
        this.authService.signIn(userInfo).subscribe({
            next: (res: any) => {
              this.router.navigate(['home']);
            },
            error: (err:any) => {
              console.error('Đăng nhập thất bại:', err.error);
              // hiển thị lỗi lên UI (ví dụ: this.errorMessage = err.error.message)
            },
            complete: () => {
              console.log('Hoàn tất xử lý API đăng nhập');
            }
          });

    }

}