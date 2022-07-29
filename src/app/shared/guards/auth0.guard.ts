import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';

import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class Auth0Guard implements CanActivate, CanLoad {

  constructor(
    private router:Router,
    private auth:AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>{

    return this.auth.isAuthenticated$.pipe(
      tap((data) => {
         if(!data){
          this.router.navigateByUrl('/home');
         }
      })
    );
    
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> {
    return this.auth.isAuthenticated$.pipe(
      tap((data) => {
         if(!data){
          this.router.navigateByUrl('/home');
         }
      })
    );
    
  }

}
