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
} from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { PermissionGuard } from 'src/auth/guards/permission.guard';
import { CheckPermissionsFor } from 'src/auth/guards/permissions.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from '.prisma/client';
import { Request } from 'express';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('role')
  @ApiBearerAuth()
  create(@Body() createRoleDto: CreateRoleDto, @Req() req) {
    return this.rolesService.create(createRoleDto, req.user);
  }

  @Get()
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('role')
  @ApiBearerAuth()
  async findAll(@Req() req) {
    // if the root user
    const [roles, count] = await this.rolesService.findMany({
      where: {
        enName: {
          notIn: ['Root'], // Prevent root role
        },
        userId: req.user.id,
      },
    });

    return {
      count,
      data: roles,
    };
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('role')
  @ApiBearerAuth()
  update(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
    @Req() req: Request,
  ) {
    return this.rolesService.update(id, req.user as User, updateRoleDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('role')
  @ApiBearerAuth()
  remove(@Param('id') id: string, @Req() req: any) {
    return this.rolesService.remove(id, req.user);
  }
}
