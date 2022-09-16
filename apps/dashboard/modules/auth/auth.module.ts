import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserAccessModule } from '../user-access/user-access.module';
import { AccessTokenModule } from '../access-token/access-token.module';

@Module({
  imports: [UserAccessModule, AccessTokenModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
