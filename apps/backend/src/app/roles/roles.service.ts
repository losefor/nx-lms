import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class RolesService {
  constructor(private prisma: PrismaService) {}

  reshape(roles: Role[]) {
    return roles.map(({ id, userId, enName, arName, ...safe }) => safe);
  }

  create(createRoleDto: CreateRoleDto, user: User) {
    return this.prisma.role.create({
      data: { ...createRoleDto, userId: user.id },
    });
  }

  async findMany(args: Prisma.RoleFindManyArgs) {
    const role = await this.prisma.role.findMany(args);
    const count = await this.prisma.role.count({ where: args.where });

    return [role, count];
  }

  findFirst(args?: Prisma.RoleFindFirstArgs) {
    return this.prisma.role.findFirst(args);
  }

  update(roleId: string, user: User, updateRoleDto: UpdateRoleDto) {
    const isPermittedToUpdate = this.prisma.role.findFirst({
      where: {
        id: roleId,
        userId: user.id,
        enName: { notIn: 'Root' },
      },
    });

    if (!isPermittedToUpdate) {
      throw new NotFoundException('This role is not exist.');
    }

    return this.prisma.role.update({
      where: { id: roleId },
      data: updateRoleDto,
    });
  }

  remove(id: string, user: User) {
    const isPermittedToDelete = this.prisma.role.findFirst({
      where: {
        id,
        userId: user.id,
        enName: { notIn: 'Root' },
      },
    });

    if (!isPermittedToDelete) {
      throw new NotFoundException('This role is not exist.');
    }

    return this.prisma.role.delete({
      where: {
        id,
      },
    });
  }
}
