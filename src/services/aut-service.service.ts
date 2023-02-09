import { RegisterModel } from './../models/RegisterModel';
import { TokenModel } from './../models/TokenModel';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../models/LoginModel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutServiceService {
  apiUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  login(user: LoginModel) {
    return this.http.get<TokenModel[]>(
      this.apiUrl + '/?email=' + user.email + '&password=' + user.password
    );
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }

  register(user: RegisterModel) {
    return this.http.post(this.apiUrl, user);
  }
}
