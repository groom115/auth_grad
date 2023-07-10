import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateFn,
} from '@angular/router';
import { AuthService } from '../services/auth.service';

export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    if (this.auth.isLoggedIn()) {
      return this.auth.isLoggedIn();
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
