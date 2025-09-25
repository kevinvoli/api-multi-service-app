import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("custom_delivery_charges_order", { schema: "amygo1" })
export class CustomDeliveryChargesOrder {
  @PrimaryGeneratedColumn({ type: "int", name: "iDeliveyChargeId" })
  iDeliveyChargeId: number;

  @Column("int", { name: "iDistanceRangeFrom" })
  iDistanceRangeFrom: number;

  @Column("int", { name: "iDistanceRangeTo" })
  iDistanceRangeTo: number;

  @Column("decimal", { name: "fDeliveryCharge", precision: 9, scale: 2 })
  fDeliveryCharge: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Deleted";

  @Column("decimal", { name: "fDeliveryChargeUser", precision: 9, scale: 2 })
  fDeliveryChargeUser: string;

  @Column("decimal", {
    name: "fDeliveryChargeCancelled",
    precision: 9,
    scale: 2,
  })
  fDeliveryChargeCancelled: string;

  @Column("int", { name: "iVehicleTypeId" })
  iVehicleTypeId: number;
}
