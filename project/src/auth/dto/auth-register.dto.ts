import { IsDateString, IsOptional, IsString } from 'class-validator';
import { AuthLoginDTO } from './auth-login.dto';

export class AuthRegisterDTO extends AuthLoginDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;
  @IsString()
  role: number;
}
