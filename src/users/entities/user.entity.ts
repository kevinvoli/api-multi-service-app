import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Order } from '../../orders/entities/order.entity';
import { Driver } from '../../vehicles/entities/driver.entity';
import { PaymentTransaction } from '../../payments/entities/payment-transaction.entity'; // Import PaymentTransaction for relation
import { UserWallet } from '../../payments/entities/user-wallet.entity'; // Import UserWallet for relation

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToOne(() => Driver, (driver) => driver.user)
  driver: Driver;

  @OneToMany(() => PaymentTransaction, (paymentTransaction) => paymentTransaction.user)
  paymentTransactions: PaymentTransaction[];

  @OneToOne(() => UserWallet, (userWallet) => userWallet.user)
  userWallet: UserWallet;
}
