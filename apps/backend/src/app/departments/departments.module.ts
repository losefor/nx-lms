import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [PrismaModule, RolesModule],
  controllers: [DepartmentsController],
  providers: [DepartmentsService],
})
export class DepartmentsModule {}
