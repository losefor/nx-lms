import { Prisma, User } from '.prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { RentBookDto } from './dto/rent-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  create(createBookDto: CreateBookDto, user: User) {
    return this.prisma.book.create({
      data: {
        arName: createBookDto.arName,
        enName: createBookDto.enName,
        description: createBookDto.description,
        categoryId: createBookDto.categoryId,
        offerType: createBookDto.offerType,
        type: createBookDto.type,
        userId: user.id,
      },
    });
  }

  async findMany(args?: Prisma.BookFindManyArgs) {
    const books = await this.prisma.book.findMany(args);
    const count = await this.prisma.book.count({ where: args.where });

    return [books, count];
  }

  async findUnique(id: string) {
    const book = await this.prisma.book.update({
      where: { id },
      data: {
        clicks: {
          increment: 1,
        },
      },
    });

    return book;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.prisma.book.update({
      where: { id },
      data: updateBookDto,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }

  async rent(bookId: string, userId: string, rentBookDto: RentBookDto) {
    // Find the last rented time
    const previousRent = this.prisma.bookRent.findFirst({
      orderBy: { createdAt: 'desc' },
    });

    // Check if the book exists
    const bookIsExist = this.prisma.book.findUnique({ where: { id: bookId } });

    // Throw error if the book is not exist
    if (!bookIsExist) {
      throw new BadRequestException('Please provide a valid book id.');
    }

    // If never rented before -> create it ASAP
    if (!previousRent) {
      await this.prisma.bookRent.create({
        data: {
          bookId: bookId,
          startAt: rentBookDto.startAt,
          endAt: rentBookDto.endAt,
          userId: userId,
        },
      });
    }

    // if there is rented -> check this rent not conflict with the previous one
    if (previousRent) {
      const isValidForRent = this.prisma.bookRent.findFirst({
        where: {
          bookId,
          endAt: {
            lte: rentBookDto.startAt,
          },
        },
      });

      if (isValidForRent) {
        await this.prisma.bookRent.create({
          data: {
            bookId: bookId,
            startAt: rentBookDto.startAt,
            endAt: rentBookDto.endAt,
            userId: userId,
          },
        });
      }

      if (!isValidForRent) {
        throw new BadRequestException(
          'The Book is Rented, Please try another schedule',
        );
      }
    }
  }
}
