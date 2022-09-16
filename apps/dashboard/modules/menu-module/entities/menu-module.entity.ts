import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
} from 'typeorm';
import { ModuleEntity } from '../../module/entities/module.entity';

@Entity({ name: 'MenuModules' })
@Tree('closure-table')
export class MenuModuleEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'int', default: 1 })
  sort: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  icon: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'int', nullable: true })
  module_id: number;

  @ManyToOne(() => ModuleEntity, (module) => module.id, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'module_id' })
  module: ModuleEntity;

  @TreeChildren()
  children: MenuModuleEntity[];

  @TreeParent()
  parent: MenuModuleEntity;
}
