import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@Component({
    selector: 'app-forgot-page',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule]
})

export class ForgotPageComponent {
    forgotForm = new FormGroup({
        email: new FormControl(''),
    })
    handleSubmit() {
        console.log(this.forgotForm.value);
    }
}