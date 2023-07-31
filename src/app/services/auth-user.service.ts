import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthUserService  {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  login(data: any):Observable<any>{
    console.log("Login");
    return this.http.post(this.baseApiUrl +'jwtauth', data)
  }

  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //    //get the jwt token which are present in the local storage
  //   const token = localStorage.getItem("jwt");

  //   //Check if the token is expired or not and if token is expired then redirect to login page and return false
  //   if (token && !this.jwtHelper.isTokenExpired(token)){
  //     return true;
  //   }
  //   this.router.navigate(["login"]);
  //   return false;
  // }
}

// export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
//   return inject(AuthUserService).canActivate(next, state);

