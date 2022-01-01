import { Role as RoleBase } from '@prisma/client';
import { IsOptional, IsString, IsUUID, Matches } from 'class-validator';

export class Role implements RoleBase {
  @IsUUID()
  id: string;

  @IsString()
  arName: string;

  @IsString()
  enName: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  role: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  university: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  department: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  student: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  attachment: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  book: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  category: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  history: string;

  @IsOptional()
  @Matches(/^(?:([crud])(?!.*\1))*$/)
  favorite: string;

  @IsUUID()
  userId: string;
}
