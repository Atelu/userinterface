import { ApiService } from './../api.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private apiService: ApiService, private myRoute: Router) {}

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //     if (this.apiService.isLoggednIn()) {
  //     return true;
  //   } else {
  //     this.myRoute.navigate([ 'dashboard']);
  //     return false;
  //   }
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
    return of(this.apiService.isLoggednIn())
    .pipe(
      take(1),
      map(data => {
        console.log('can activate data', data);
        return data;
      })
    );
  }
}
