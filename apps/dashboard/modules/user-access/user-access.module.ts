import { Module } from '@nestjs/common';
import { UserAccessService } from './user-access.service';
import { UserAccessController } from './user-access.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAccessEntity } from './entities/user-access.entity';
import { UserAccessRepository } from './repository/user-access.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserAccessEntity])],
  controllers: [UserAccessController],
  providers: [UserAccessService, UserAccessRepository],
  exports: [UserAccessService, UserAccessRepository],
})
export class UserAccessModule {}
