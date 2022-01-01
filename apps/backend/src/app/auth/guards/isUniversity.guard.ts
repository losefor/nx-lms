import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class IsUniversityGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    console.log(req.user);
    if (!(req.user?.role === 'UNIVERSITY')) {
      return false;
    }

    return true;
  }
}
