import { Book as BookSchema, BookOfferType, BookType } from '@prisma/client';
import { IsString, IsEnum, IsUUID, IsInt, IsDate } from 'class-validator';
export class Book implements BookSchema {
  @IsDate()
  isDeleted: Date;

  @IsInt()
  views: number;

  @IsInt()
  clicks: number;

  @IsString()
  author: string;

  @IsUUID(4)
  id: string;

  @IsString()
  arName: string;

  @IsString()
  enName: string;

  @IsString()
  description: string;

  @IsEnum(BookType)
  type: BookType;

  @IsEnum(BookOfferType)
  offerType: BookOfferType;

  @IsUUID(4)
  userId: string;

  @IsUUID(4)
  categoryId: string;

  createdAt: Date;
  updatedAt: Date;
}
