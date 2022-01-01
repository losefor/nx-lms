import { OmitType, PartialType } from '@nestjs/swagger';
import { Role } from '../entities/role.entity';

export class CreateRoleDto extends OmitType(Role, ['id', 'userId']) {}
