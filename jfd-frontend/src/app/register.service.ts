import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private httpClient: HttpClient) {}

  public registerNewUser(user: any): Observable<boolean> {
    alert(JSON.stringify(user));
    // const url = this._commonService.urlPrefix + 'user/registerNewUser';
    return this.httpClient.post<boolean>('', user);
  }
}
