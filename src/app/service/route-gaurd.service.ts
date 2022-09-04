import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  constructor(
      public hardcodedAuthenticationService: HardcodedAuthenticationService,
      public router:Router
      ) {

  }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticationService.isUserLoggedIn())
    return true;
    return false;  

}
}

