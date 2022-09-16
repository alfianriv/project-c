import { Module } from '@nestjs/common';
import { AccessTokenService } from './access-token.service';
import { AccessTokenController } from './access-token.controller';
import { AccessTokenRepository } from './repository/access-token.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessTokenEntity } from './entities/access-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessTokenEntity])],
  controllers: [AccessTokenController],
  providers: [AccessTokenService, AccessTokenRepository],
  exports: [AccessTokenService, AccessTokenRepository],
})
export class AccessTokenModule {}
