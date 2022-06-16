import { Component } from '@angular/core'
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    loginForm: FormGroup;

    submitForm(): void {
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[ i ].markAsDirty();
            this.loginForm.controls[ i ].updateValueAndValidity();
        }
        if(this.loginForm.valid) {
          this.authService.login(this.loginForm.value).subscribe(result => {
              localStorage.setItem("user", JSON.stringify(result));
              this.router.navigate(['/']); 
          })
        }
    }

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthServiceService) {
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        });
    }
}    