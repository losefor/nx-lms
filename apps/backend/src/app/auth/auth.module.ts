import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AnonymousStrategy } from './strategies/anonymous.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  imports: [UsersModule, PassportModule, RolesModule],
  providers: [AuthService, JwtStrategy, LocalStrategy, AnonymousStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
