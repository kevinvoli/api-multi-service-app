import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("order_delivery_charge_details", { schema: "amygo1" })
export class OrderDeliveryChargeDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderDeliveryChargeId" })
  iOrderDeliveryChargeId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("decimal", { name: "fDeliveryCharge", precision: 9, scale: 2 })
  fDeliveryCharge: string;

  @Column("datetime", { name: "dDate" })
  dDate: Date;

  @Column("decimal", { name: "fDeliveryChargeUser", precision: 9, scale: 2 })
  fDeliveryChargeUser: string;

  @Column("text", { name: "tDeliveryChargeDetails" })
  tDeliveryChargeDetails: string;

  @Column("int", { name: "iDriverVehicleTypeId" })
  iDriverVehicleTypeId: number;
}
