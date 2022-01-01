import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { findManyDepartmentsDto } from './dto/find-many-departments.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  async findMany(args: Prisma.UserFindManyArgs) {
    const where: Prisma.UserWhereInput = {
      role: { enName: 'Department' },
    };

    const departments = await this.prisma.user.findMany({
      skip: args.skip,
      take: args.take,
      where,
    });

    const count = await this.prisma.user.count({ where });

    return [departments, count];
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
