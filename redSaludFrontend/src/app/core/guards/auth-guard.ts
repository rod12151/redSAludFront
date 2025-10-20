import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../features/auth/services/auth.service';

export const authGuard: CanActivateFn = (router, state) => {

  const authservice = inject(AuthService);
  const route = inject(Router)
  const rolesClaims = authservice.getRole()
  const requiredRoles = router.data['roles'] as string[]
  if (!rolesClaims) {
    route.navigateByUrl('login');
    return false
  }
  const userRoles: string[] = [];
  if (rolesClaims.superAdmin) userRoles.push('SUPER_ADMIN');
  if (rolesClaims.admin) userRoles.push('ADMIN');
  if (rolesClaims.user) userRoles.push('USER');
  if (rolesClaims.invited) userRoles.push('INVITED')

  const hasAccess = requiredRoles.some(role => userRoles.includes(role));

  if(!hasAccess) {
    route.navigateByUrl('/')
    return false;
  }
  return true;

};
