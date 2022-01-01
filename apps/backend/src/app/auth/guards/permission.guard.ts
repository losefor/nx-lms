import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { CaslAbilityFactory } from 'src/casl/casl-ability.factory';
import { SUBJECT } from './permissions.decorator';
import { Subjects } from '../../casl/casl-ability.factory';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private CaslAbilityFactory: CaslAbilityFactory,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    // Get the request form the contexts
    const req = context.switchToHttp().getRequest();
    // const user = req.user;

    const subject = this.reflector.get<Subjects>(SUBJECT, context.getHandler());

    // Reshape the role of the user
    // const [reshapedRole] = this.roleService.reshape([user.role]);
    // user.role = reshapedRole;
    const hasPermissions = this.CaslAbilityFactory.createForUser(req.user);

    if (hasPermissions.can(getActionFromRequest(req), subject)) {
      return true;
    }

    return false;
  }
}

export const getActionFromRequest = (req: Request) => {
  switch (req.method) {
    case 'GET': {
      return 'read';
    }

    case 'POST': {
      return 'create';
    }

    case 'PATCH':
    case 'PUT': {
      return 'update';
    }

    case 'DELETE': {
      return 'delete';
    }
  }
};
