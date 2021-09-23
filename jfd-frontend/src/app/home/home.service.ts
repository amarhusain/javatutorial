import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { user } from "../signup/user.model";

@Injectable({
    providedIn: 'root',
  })
  export class HomeService {
    constructor(private httpClient: HttpClient) {}
  
    public getUsers(): Observable<user[]> {
      return this.httpClient.get<user[]>('api/users');
    }
  }