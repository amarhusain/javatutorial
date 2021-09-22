import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  public registerNewUser(user: any): Observable<boolean> {
    return this.httpClient.post<boolean>('api/user/add', user);
  }
}
