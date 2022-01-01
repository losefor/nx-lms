import { OmitType, PartialType } from '@nestjs/swagger';
import { University } from '../entities/university.entity';
import { CreateUniversityDto } from './create-university.dto';

export class FindManyUniversityDto extends OmitType(University, [
  'phoneNumber',
  'updatedAt',
]) {}
