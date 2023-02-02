import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutServiceService } from 'src/services/aut-service.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(
    private autService: AutServiceService,
    private router: Router,
    private toastrService: ToastrService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isAuthenticated = this.autService.isAuthenticated();
    if (isAuthenticated == true) {
      return true;
    } else {
      this.toastrService.error('Sisteme Giriş İçin Yapınız');
      this.router.navigate(['/']);

      return false;
    }
  }
}
