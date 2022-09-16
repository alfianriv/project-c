import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../../commons/base.entity';
import { RoleEntity } from '../../role/entities/role.entity';

@Entity({ name: 'UserAccesses' })
export class UserAccessEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 255 })
  salt: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'int' })
  role_id: number;

  @ManyToOne(() => RoleEntity, (role) => role.id, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;
}
