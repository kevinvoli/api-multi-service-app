import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Order } from './order.entity';

@Entity()
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  // Add relation to product/item if applicable
  // @ManyToOne(() => Product, (product) => product.orderDetails)
  // product: Product;

  @ManyToOne(() => Order, (order) => order.orderDetails)
  order: Order;
}
