import { Orders } from "../../entities/order.entity";
import { OrderStatus } from "../../order-status/entities/order-status.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("order_status_logs", { schema: "amygo1" })
export class OrderStatusLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderLogId" })
  iOrderLogId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @ManyToOne(() => Orders, (order) => order.orderStatusLogs)
  @JoinColumn({ name: "iOrderId", referencedColumnName: "iOrderId" })
  order: Orders;

  @Column("int", { name: "iStatusCode", comment: "Relation with order status" })
  iStatusCode: number;

  @ManyToOne(() => OrderStatus, (orderStatus) => orderStatus.orderStatusLogs)
  @JoinColumn({ name: "iStatusCode", referencedColumnName: "iStatusCode" })
  orderStatus: OrderStatus;

  @Column("datetime", { name: "dDate" })
  dDate: Date;

  @Column("varchar", { name: "vIp", length: 255 })
  vIp: string;
}
