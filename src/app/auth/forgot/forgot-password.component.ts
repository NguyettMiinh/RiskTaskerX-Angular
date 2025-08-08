import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-forgot-page',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})

export class ForgotPageComponent {
    forgotForm = new FormGroup({
        email: new FormControl(''),
    })
    handleSubmit() {
        console.log(this.forgotForm.value);
    }
}