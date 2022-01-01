import { Module } from '@nestjs/common';
import { UniversitiesService } from './universities.service';
import { UniversitiesController } from './universities.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [PrismaModule, RolesModule],
  controllers: [UniversitiesController],
  providers: [UniversitiesService],
})
export class UniversitiesModule {}
