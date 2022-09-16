import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAccessService } from '../user-access/user-access.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import * as bcrypt from 'bcrypt';
import { AccessTokenService } from '../access-token/access-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userAccessService: UserAccessService,
    private readonly accessTokenService: AccessTokenService,
  ) {}

  async login(data: AuthLoginDto) {
    const user = await this.userAccessService.findOneByUnique(data.identity);
    this.userAccessService.isActive(user);
    if (!this.compare(user.password, data.password))
      throw new UnauthorizedException('Password wrong');
    const createToken = await this.accessTokenService.create({
      user_access_id: user.id,
    });
    return {
      data: {
        token: {
          access_token: createToken.data.access_token,
          refresh_token: createToken.data.refresh_token,
          expired_at: createToken.data.expired_at,
        },
        user: {
          emai: user.email,
          username: user.username,
        },
      },
    };
  }

  async compare(hash, password) {
    return bcrypt.compare(hash, password);
  }
}
