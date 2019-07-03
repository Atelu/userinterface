import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private storageId = 'LoggedInUser';

  constructor(private myRoute: Router) { }
  sendToken(token: string) {
    localStorage.setItem(this.storageId, token);
  }
  getToken() {
    return localStorage.getItem(this.storageId);
  }
  isLoggednIn() {
    return this.getToken() !== null;
  }
  login(): void {
    localStorage.setItem(this.storageId, 'true');
  }
  logout() {
    localStorage.removeItem(this.storageId);
    this.myRoute.navigate(['dashboard']);
  }

}
