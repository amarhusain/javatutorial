import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../signup/user.model";

@Injectable({
    providedIn: 'root',
  })
  export class HomeService {
    constructor(private httpClient: HttpClient) {}
  
    public getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>('api/users');
    }

    public deleteUser(user: User): Observable<Boolean>{
      return this.httpClient.get<Boolean>('api/user/deletebyid', {params: new HttpParams().set("id", user.id.toString())});
    }

    public deleteUser2(user: User): Observable<User[]>{
      return this.httpClient.post<User[]>('api/user/delete', user);
    }

  }