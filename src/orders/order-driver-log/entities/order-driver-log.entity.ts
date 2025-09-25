import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_driver_log", { schema: "amygo1" })
export class OrderDriverLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iLogId" })
  iLogId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("text", { name: "vMessage" })
  vMessage: string;

  @Column("datetime", { name: "dDate" })
  dDate: Date;
}
