import { PickType } from '@nestjs/swagger';
import { Role, User as UserSchema } from '@prisma/client';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  isEnum,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';

export class UserBase implements UserSchema {
  @IsString()
  arName: string;

  @IsString()
  enName: string;

  @IsEmail()
  email: string;

  @IsUrl()
  uotUrl: string;

  @IsUUID()
  id: string;

  @IsUUID()
  roleId: string;

  @IsBoolean()
  isRoot: boolean;

  // University and departments fields
  @IsString()
  arCommName: string;

  @IsString()
  enCommName: string;

  @IsString()
  username: string;

  // Students fields
  firstName: string;
  secondName: string;
  universityId: string;
  departmentId: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}

export class User extends PickType(UserBase, [
  'id',
  'phoneNumber',
  'firstName',
  'secondName',
  'username',
]) {}
