import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx_phone_id', ['phone', 'id'])
@Index('idx_phone_created', ['phone', 'createdAt'])
@Entity('otp_codes')
export class OtpCode {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column('varchar', { name: 'phone', length: 32 })
  phone: string;

  @Column('char', { name: 'codeHash', length: 64 })
  codeHash: string;

  @Column('datetime', { name: 'expiresAt' })
  expiresAt: Date;

  @Column('tinyint', { name: 'attempts', unsigned: true, default: 0 })
  attempts: number;

  @Column('datetime', { name: 'usedAt', nullable: true })
  usedAt: Date | null;

  @Column('datetime', {
    name: 'createdAt',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
