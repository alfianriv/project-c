import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PermissionEntity } from '../../permission/entities/permission.entity';
import { MenuModuleEntity } from '../../menu-module/entities/menu-module.entity';

@Entity({ name: 'Modules' })
export class ModuleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'varchar', length: 255, unique: true })
  name: string;

  @OneToMany(() => PermissionEntity, (menu_access) => menu_access.module, {
    createForeignKeyConstraints: false,
  })
  menu_accesses: PermissionEntity[];

  @OneToMany(() => MenuModuleEntity, (menu_module) => menu_module.module, {
    createForeignKeyConstraints: false,
  })
  menu_modules: MenuModuleEntity[];
}
