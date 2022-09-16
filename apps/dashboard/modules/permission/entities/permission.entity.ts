import { BaseEntity } from '@/../apps/dashboard/commons/base.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ModuleEntity } from '../../module/entities/module.entity';
import { RoleEntity } from '../../role/entities/role.entity';

@Entity({ name: 'Permissions' })
export class PermissionEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'int' })
  module_id: number;

  @Column({ type: 'int' })
  role_id: number;

  @Column({ type: 'boolean', default: false })
  is_view: boolean;

  @Column({ type: 'boolean', default: false })
  is_delete: boolean;

  @Column({ type: 'boolean', default: false })
  is_edit: boolean;

  @Column({ type: 'boolean', default: false })
  is_approval: boolean;

  @Column({ type: 'boolean', default: false })
  is_search: boolean;

  @Column({ type: 'boolean', default: false })
  is_upload: boolean;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @ManyToOne(() => RoleEntity, (role) => role.id, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @ManyToOne(() => ModuleEntity, (module) => module.id, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'module_id' })
  module: ModuleEntity;
}
