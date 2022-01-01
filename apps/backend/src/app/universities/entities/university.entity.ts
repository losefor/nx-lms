import { PickType } from '@nestjs/swagger';
import { UserBase } from 'src/users/entities/user.entity';

export class University extends PickType(UserBase, [
  'arCommName',
  'enCommName',
  'phoneNumber',
  'username',
  'createdAt',
  'updatedAt',
]) {}
