import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_status_logs", { schema: "amygo1" })
export class OrderStatusLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderLogId" })
  iOrderLogId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iStatusCode", comment: "Relation with order status" })
  iStatusCode: number;

  @Column("datetime", { name: "dDate" })
  dDate: Date;

  @Column("varchar", { name: "vIp", length: 255 })
  vIp: string;
}
