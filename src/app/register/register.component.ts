import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authenticationService';
import { map } from 'rxjs/operators';

class CustomValidators {
  static passwordsMatch (control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const repassword = control.get('repassword').value;

    if((password === repassword) && (password !== null && repassword !== null)){
      return null;
    } else {
      return {passwordsNotMatching: true};
    }
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage ='';
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)

      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      repassword: new FormControl(null, [
        Validators.required
      ])
    }, {
      validators: CustomValidators.passwordsMatch
    }
    )
  }

  onSubmit() {
    if(this.registerForm.invalid) {
      return;
    }
    this.authService.register(this.registerForm.value).pipe().subscribe(
        (response) => {
          console.log('Response received!');
          this.router.navigate(['login']);
        },
        (error) => {
          this.errorMessage = error.error;
          console.log(error.error);
        }
      );
  }
}
