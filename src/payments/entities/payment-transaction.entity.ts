import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class PaymentTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column()
  currency: string; // e.g., 'USD', 'EUR'

  @Column()
  status: string; // e.g., 'completed', 'pending', 'failed'

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  transactionDate: Date;

  @ManyToOne(() => User, (user) => user.paymentTransactions)
  user: User;
}
