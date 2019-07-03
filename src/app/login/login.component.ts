import { ApiService } from './../api.service';
import {ErrorStateMatcher} from '@angular/material/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Validators,
  FormGroup,
  FormBuilder,
  AbstractControl,
  FormControl,
  FormControlName
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;


  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}
  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }

  onSubmit(): void {
    console.log(this.loginform.value);
    if (this.loginform.valid) {
      this.apiService.login();
      this.router.navigate(['dashboard']);
      alert('logged in');

    }
  }
}
