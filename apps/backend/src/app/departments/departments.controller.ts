import { User, Prisma } from '.prisma/client';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { JwtOptionalAuthGuard } from 'src/auth/guards/jwtOptional.guard';
import { PermissionGuard } from 'src/auth/guards/permission.guard';
import { CheckPermissionsFor } from 'src/auth/guards/permissions.decorator';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import {
  findManyDepartmentsDto,
  findManyDepartmentsQuery,
} from './dto/find-many-departments.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('department')
  create(
    @Body() createDepartmentDto: CreateDepartmentDto,
    @Req() req: Request,
  ) {
    const user = req.user as User;
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  @UseGuards(JwtOptionalAuthGuard)
  @ApiBearerAuth()
  async findAll(@Query() query: findManyDepartmentsQuery, @Req() req: Request) {
    const user = req.user as User;

    let where: Prisma.UserWhereInput;
    if (query.myDepartments && req.user) {
      where = {
        universityId: user.id,
      };
    }

    const [data, count] = await this.departmentsService.findMany({
      skip: query.skip,
      take: query.take,
    });

    return { count, data };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
