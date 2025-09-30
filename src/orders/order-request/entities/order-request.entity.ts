import { Orders } from "../../../orders/entities/order.entity";
import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("order_request", { schema: "amygo1" })
export class OrderRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "orderRequestId" })
  orderRequestId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @ManyToOne(() => Orders, (order) => order.orderRequest)
  @JoinColumn({ name: "iOrderId", referencedColumnName: "iOrderId" })
  order: Orders;

  @Column("longtext", { name: "vMsgCode" })
  vMsgCode: string;

  @Column("enum", { name: "eStatus", enum: ["Pending", "Accept"] })
  eStatus: "Pending" | "Accept";

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.orderRequests)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;
}
