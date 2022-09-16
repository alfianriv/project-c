import { BaseEntity } from '@/../apps/dashboard/commons/base.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PermissionEntity } from '../../permission/entities/permission.entity';
import { UserAccessEntity } from '../../user-access/entities/user-access.entity';

@Entity({ name: 'Roles' })
export class RoleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @OneToMany(() => UserAccessEntity, (user_access) => user_access.role, {
    createForeignKeyConstraints: false,
  })
  users: UserAccessEntity[];

  @OneToMany(() => PermissionEntity, (menu_access) => menu_access.role, {
    createForeignKeyConstraints: false,
  })
  menu_accesses: PermissionEntity[];
}
