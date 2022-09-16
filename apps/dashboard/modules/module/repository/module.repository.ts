import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { ModuleEntity } from '../entities/module.entity';

@Injectable()
export class ModuleRepository extends Repository<ModuleEntity> {
  constructor(private dataSource: DataSource) {
    super(ModuleEntity, dataSource.createEntityManager());
  }
}
