import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Prisma } from '@prisma/client';
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  //   ========== findUnique ==========
  async findUnique(args: Prisma.UserFindUniqueArgs): Promise<User> {
    return this.prisma.user.findUnique(args);
  }

  async findUniqueUnsafe(args: Prisma.UserFindUniqueArgs): Promise<User> {
    return this.prisma.user.findUnique(args);
  }

  //   ========== findFirst ==========
  async findFirst(args: Prisma.UserFindFirstArgs): Promise<User> {
    const user = await this.prisma.user.findFirst(args);
    // TODO: clean the user from dangerous fields

    return user;
  }

  async findFirstUnsafe(args: Prisma.UserFindFirstArgs): Promise<User> {
    return this.prisma.user.findFirst(args);
  }

  //   ========== create ==========
  async create(args: Prisma.UserCreateArgs): Promise<User> {
    return await this.prisma.user.create(args);
  }

  async createUnsafe(args: Prisma.UserCreateArgs): Promise<User> {
    const user = await this.prisma.user.create(args);
    // TODO: clean the user from dangerous fields
    return user;
  }
}
