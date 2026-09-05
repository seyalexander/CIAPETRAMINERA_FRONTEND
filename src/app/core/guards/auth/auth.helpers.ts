import { inject } from '@angular/core';
import { LoginService } from '../../../feactures/login/services/api/login-service';
import { Role } from '../../auth/roles.enum';


export class AuthHelpers {

  private loginService = inject(LoginService);

  isAdmin(): boolean {
    return this.loginService.hasAnyRole([Role.ADMIN, Role.SUPERADMIN]);
  }

  isSuperAdmin(): boolean {
    return this.loginService.hasRole(Role.SUPERADMIN);
  }

  canEdit(): boolean {
    return this.loginService.hasRole(Role.ADMIN);
  }
}