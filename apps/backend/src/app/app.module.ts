import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './categories/categories.module';
import { UniversitiesModule } from './universities/universities.module';
import { CaslModule } from './casl/casl.module';
import { DepartmentsModule } from './departments/departments.module';
import { StudentsModule } from './students/students.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    PrismaModule,
    BooksModule,
    CategoriesModule,
    UniversitiesModule,
    CaslModule,
    DepartmentsModule,
    StudentsModule,
    RolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
