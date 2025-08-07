import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";


@Component({
    selector: 'app-login-page',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})

export class LoginPageComponent {
    // 1
    loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
        rememberMe: new FormControl(false),
    });

    handleSubmit() {
        console.log(this.loginForm.value);
    }

}