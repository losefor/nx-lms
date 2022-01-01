import { PartialType, PickType } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Matches } from 'class-validator';
export class LoginDto {
  @Matches(/^(\+|00)?([0-9]{1,3})?0?(77|75|78|79)([0-9]{8})$/)
  phoneNumber: string;
}

export class SocialLoginDto {
  provider: string;
  access_token: string;
}
export class ChangePasswordDto {
  oldPassword: string;
  newPassword: string;
}
export class ForgetPasswordDto {
  email: string;
}
export class VerifyForgetPasswordDto {
  email: string;
  token: string;
}
export class ResetPasswordDto {
  email: string;
  token: string;
  password: string;
}

export class AuthResponse {
  tokens: Tokens;
  user: User;
}

export class Tokens {
  accessToken: string;
  refreshToken: string;
}
export class VerifyOtpDto {
  code: string;
  phoneNumber: string;
}
export class OtpResponse {
  id: string;
  message: string;
  success: boolean;
  phone_number: string;
  provider: string;
  is_contact_exist: boolean;
}
export class OtpDto {
  phone_number: string;
}
export class OtpLoginDto {
  otp_id: string;
  code: string;
  phone_number: string;
  name?: string;
  email?: string;
}
