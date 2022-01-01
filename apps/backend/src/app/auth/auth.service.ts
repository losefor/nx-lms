import { Injectable } from '@nestjs/common';
import { AuthResponse } from './dto/create-auth.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  login(user: any): AuthResponse {
    return {
      tokens: {
        accessToken: jwt.sign({ id: user.id }, '**secretKey**'),
        refreshToken: 'refresh token',
      },
      user,
    };
  }
}
