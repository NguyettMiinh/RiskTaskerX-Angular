import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-otp-page',
    templateUrl: './otp-page.component.html',
    styleUrls: ['./otp-page.component.css']
})

export class OtpPageComponent {
    forgotForm = new FormGroup({
        email: new FormControl(''),
    })
    handleSubmit() {
        console.log(this.forgotForm.value);
    }
}