import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { greeting } from './greeting.model';
import { user } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  whoami = '';
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    /*this.httpClient.get<greeting>('api/greeting?name=ravinder').subscribe( data => { 
      console.log('DATA ', data.content);
      //this.whoami = data.content;
    });*/

    //HttpHeaders headers = new HttpHeaders();
    let params = new HttpParams();
    params = params.append('fname', 'B');
    params = params.append('lname', 'B');
    params = params.append('email', 'B');


    this.httpClient.post<user>('api/user/add', '', {params: params}).subscribe( data => { 
      console.log('DATA ', data);
      this.whoami = 'first name :: ' + data.fname + ', last name :: ' + data.lname + ', Email :: ' + data.email;
    });

  }

  

}
