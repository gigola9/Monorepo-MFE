import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services';

@Component({
  selector: 'store-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl({ value: '', disabled: false}, Validators.required),
      password: new FormControl({ value: '', disabled: false }, Validators.required)
    });
  }

  loginUser() {
    this.authService.loginUser(this.loginForm.getRawValue());
  }
}
