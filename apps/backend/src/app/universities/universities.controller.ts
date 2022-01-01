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
import { UniversitiesService } from './universities.service';
import { CreateUniversityDto } from './dto/create-university.dto';
import { UpdateUniversityDto } from './dto/update-university.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { IsUniversityGuard } from 'src/auth/guards/isUniversity.guard';
import { PermissionGuard } from 'src/auth/guards/permission.guard';
import { CheckPermissionsFor } from 'src/auth/guards/permissions.decorator';

@Controller('universities')
export class UniversitiesController {
  constructor(private readonly universitiesService: UniversitiesService) {}

  @Post()
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('university')
  @ApiBearerAuth()
  create(@Body() createUniversityDto: CreateUniversityDto) {
    return this.universitiesService.create(createUniversityDto);
  }

  @Get()
  async findAll() {
    const [universities, count] = await this.universitiesService.findMany();

    return {
      count,
      data: universities,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universitiesService.findUnique(id);
  }

  @Patch('')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, IsUniversityGuard)
  update(@Body() updateUniversityDto: UpdateUniversityDto, @Req() req) {
    return this.universitiesService.update(req.user, updateUniversityDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, PermissionGuard)
  @CheckPermissionsFor('university')
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.universitiesService.remove(id);
  }
}
