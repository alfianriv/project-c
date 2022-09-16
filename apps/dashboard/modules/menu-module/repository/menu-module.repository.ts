import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { MenuModuleEntity } from '../entities/menu-module.entity';

@Injectable()
export class MenuModuleRpository extends Repository<MenuModuleEntity> {
  constructor(private dataSource: DataSource) {
    super(MenuModuleEntity, dataSource.createEntityManager());
  }
}
