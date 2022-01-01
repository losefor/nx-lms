import { PartialType } from '@nestjs/swagger';
import { IsDate } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class RentBookDto {
  @IsDate()
  startAt: Date;

  @IsDate()
  endAt: Date;
}
