import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, BadRequestException } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../auth.service';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private userService: UsersService,
    private roleService: RolesService,
  ) {
    super({
      usernameField: 'phoneNumber',
      passwordField: 'phoneNumber',
    });
  }
  async validate(phoneNumber: string, department: string): Promise<any> {
    console.log(phoneNumber);
    // Make the validation on the phone Number
    const myRegexp =
      /^(?<starting>\+|00)?(?<country>[0-9]{1,3})?0?(?<company>77|75|78|79)(?<phoneNumber>[0-9]{8})$/;

    const validPhoneNumber = myRegexp.test(phoneNumber);

    if (!validPhoneNumber) {
      throw new BadRequestException('Please Provide a valid phone number');
    }

    const match = myRegexp.exec(phoneNumber);
    const filteredPhoneNumber = match[3] + match[4];

    const user = await this.userService.findUnique({
      where: {
        phoneNumber: filteredPhoneNumber,
      },
    });

    // If the user is not exist -> Create new user
    if (!user) {
      const studentRole = await this.roleService.findFirst({
        where: { enName: 'Student' },
      });

      return await this.userService.create({
        data: {
          phoneNumber: filteredPhoneNumber,
          role: { connect: { id: studentRole.id } },
        },
      });
    }

    return user;
  }
}
