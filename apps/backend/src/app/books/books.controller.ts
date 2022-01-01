import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtOptionalAuthGuard } from 'src/auth/guards/jwtOptional.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { FindManyBooksDto } from './dto/find-books.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { RentBookDto } from './dto/rent-book.dto';
import { Request } from 'express';
import { User } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @UseGuards()
  @ApiBearerAuth()
  @UseGuards(JwtOptionalAuthGuard)
  async findMany(@Query() findManyBooksDto: FindManyBooksDto, @Req() req) {
    const [books, count] = await this.booksService.findMany({
      skip: findManyBooksDto.skip,
      take: findManyBooksDto.take,
      include: {
        user: {
          select: {
            id: true,
            arCommName: true,
            enCommName: true,
          },
        },
      },
    });

    return {
      count,
      books,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findUnique(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createBookDto: CreateBookDto, @Req() req) {
    return this.booksService.create(createBookDto, req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post(':id/rent')
  rentBook(
    @Param('id') id: string,
    @Req() req: Request,
    @Body() rentBookDto: RentBookDto,
  ) {
    const user = req.user as User;
    return this.booksService.rent(id, user.id, rentBookDto);
  }
}
