import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserAccessEntity } from '../entities/user-access.entity';

@Injectable()
export class UserAccessRepository extends Repository<UserAccessEntity> {
  constructor(private dataSource: DataSource) {
    super(UserAccessEntity, dataSource.createEntityManager());
  }
}
