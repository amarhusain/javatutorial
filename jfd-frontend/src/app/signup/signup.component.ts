import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { user } from './user.model';

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

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private httpClient: HttpClient
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

  ngOnInit(): void {
    let params = new HttpParams();
    params = params.append('fname', 'B');
    params = params.append('lname', 'B');
    params = params.append('email', 'B');


    //localhost:8080/user/add?fname=Value1&lname=Value2&email=Value3
    // Move below http call to service
    this.httpClient.post<user>('api/user/add', '', {params: params}).subscribe( data => { 
      console.log('DATA ', data);
      this.whoami = 'first name :: ' + data.fname + ', last name :: ' + data.lname + ', Email :: ' + data.email;
    });
  }

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
