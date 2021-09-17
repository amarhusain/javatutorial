import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  mobilePattern = '^[0-9_-]{10,12}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.signUpForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(15),
        ],
      ],
      lastname: [
        '',
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(15),
        ],
      ],
      dob: ['', [Validators.required]],
      gender: ['Select...', [Validators.required]],
      mobile: [
        '',
        [Validators.required, Validators.pattern(this.mobilePattern)],
      ],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      // firstname: [''],
    });
  }

  ngOnInit(): void {}

  signUp() {
    // console.log(this.signUpForm.value);
    this.registerService
      .registerNewUser(this.signUpForm.value)
      .subscribe((data) => {});
  }

  get f() {
    return this.signUpForm.controls;
  }
  get firstName() {
    return this.signUpForm.get('firstname');
  }
  get mobile() {
    return this.signUpForm.get('mobile');
  }
}
