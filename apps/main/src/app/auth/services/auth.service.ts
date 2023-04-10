import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { LoginResponseMoldels } from '../models/LoginResponseModel';

import * as fromSharedServices from "../../shared/services";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private storage: fromSharedServices.SessionStorageService,
    private router: Router
  ) { }

  loginUser(credentials: LoginModel) {
    this.http.post<LoginResponseMoldels>(`/api/auth/login`, credentials).subscribe(res => {
        if (res) {
          this.storage.setItem('name', res.user);
          this.storage.setItem('token', res.user);
          this.router.navigateByUrl('/');
        }
    });
  }

  isAuthenticated() {
    if (this.storage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
