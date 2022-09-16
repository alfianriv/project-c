import { IsString } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  identity: string;

  @IsString()
  password: string;
}
