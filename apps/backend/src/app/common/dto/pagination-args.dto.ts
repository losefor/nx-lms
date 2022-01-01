import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';

export class Pagination {
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  skip?: number = 0;

  @IsInt()
  @Transform(({ value }) => parseInt(value))
  take?: number = 15;
}
