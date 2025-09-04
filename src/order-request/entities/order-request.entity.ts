import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_request", { schema: "amygo1" })
export class OrderRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "orderRequestId" })
  orderRequestId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("longtext", { name: "vMsgCode" })
  vMsgCode: string;

  @Column("enum", { name: "eStatus", enum: ["Pending", "Accept"] })
  eStatus: "Pending" | "Accept";

  @Column("int", { name: "iDriverId" })
  iDriverId: number;
}
