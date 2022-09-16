import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { AccessTokenEntity } from '../entities/access-token.entity';

@Injectable()
export class AccessTokenRepository extends Repository<AccessTokenEntity> {
  constructor(private dataSource: DataSource) {
    super(AccessTokenEntity, dataSource.createEntityManager());
  }
}
