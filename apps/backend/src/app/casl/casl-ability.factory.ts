import { Injectable } from '@nestjs/common';
import { Ability, AbilityClass, AbilityBuilder } from '@casl/ability';

export type Action = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type Subjects =
  | 'role'
  | 'university'
  | 'department'
  | 'student'
  | 'attachment'
  | 'book'
  | 'category'
  | 'history'
  | 'favorite'
  | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

function getAction(letter: string): Action {
  switch (letter) {
    case 'c': {
      return 'create';
    }

    case 'r': {
      return 'read';
    }

    case 'u': {
      return 'update';
    }

    case 'd': {
      return 'delete';
    }
  }
}

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: any) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    const permissions = user.role;

    if (user.role.enName === 'Root') {
      can('manage', 'all'); // read-write access to everything
    } else {
      // Default permissions to noe
      cannot('manage', 'all');

      // Detect permissions from the user role
      for (const subject in permissions) {
        if (typeof permissions[subject] === 'string') {
          for (const letter of permissions[subject]) {
            // Because currently some users have a boolean in their permissions
            can(getAction(letter), subject as Subjects);
          }
        }
      }
    }

    return build();
  }
}
