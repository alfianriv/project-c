import { BaseEntity } from '@/../apps/dashboard/commons/base.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'AccessTokens' })
export class AccessTokenEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  access_token: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  refresh_token: string;

  @Column({ type: 'timestamptz' })
  expired_at: Date;

  @Column({ type: 'int', nullable: true })
  reference_id: number;

  @Column({ type: 'int' })
  user_access_id: number;
}
