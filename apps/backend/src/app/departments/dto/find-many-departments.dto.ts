import { PartialType, PickType } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';
import { UserBase } from 'src/users/entities/user.entity';
import { Pagination } from '../../common/dto/pagination-args.dto';
export class findManyDepartmentsDto extends PartialType(
  PickType(UserBase, [
    'id',
    'createdAt',
    'enCommName',
    'arCommName',
    'username',
  ]),
) {}

export class findManyDepartmentsQuery extends Pagination {
  myDepartments?: boolean;
}
