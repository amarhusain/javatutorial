import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  mobilePattern = '^[0-9_-]{10,12}';
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  whoami = '';

  constructor(private fb: FormBuilder,
    private signupService: SignupService) {
    this.signUpForm = this.fb.group({
      fname: [
        '',
        [
          Validators.minLength(3),
          Validators.required,
          Validators.maxLength(15),
        ],
      ],
      lname: [
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
    this.signupService
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
