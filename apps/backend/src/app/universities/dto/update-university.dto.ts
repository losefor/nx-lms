import { OmitType, PartialType } from '@nestjs/swagger';
import { CreateUniversityDto } from './create-university.dto';

export class UpdateUniversityDto extends PartialType(
  OmitType(CreateUniversityDto, ['phoneNumber']),
) {}
