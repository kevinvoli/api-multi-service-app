import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iOrderId", ["iLocationId"], {})
@Entity("delivery_charges", { schema: "amygo1" })
export class DeliveryCharges {
  @PrimaryGeneratedColumn({ type: "int", name: "iDeliveyChargeId" })
  iDeliveyChargeId: number;

  @Column("int", { name: "iLocationId", default: () => "'0'" })
  iLocationId: number;

  @Column("float", { name: "fOrderPriceValue", precision: 12 })
  fOrderPriceValue: number;

  @Column("float", { name: "fDeliveryChargeAbove", precision: 12 })
  fDeliveryChargeAbove: number;

  @Column("float", { name: "fDeliveryChargeBelow", precision: 12 })
  fDeliveryChargeBelow: number;

  @Column("float", { name: "fFreeOrderPriceSubtotal", precision: 12 })
  fFreeOrderPriceSubtotal: number;

  @Column("int", { name: "iFreeDeliveryRadius", default: () => "'0'" })
  iFreeDeliveryRadius: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iDistanceRangeFrom" })
  iDistanceRangeFrom: number;

  @Column("int", { name: "iDistanceRangeTo" })
  iDistanceRangeTo: number;

  @Column("float", { name: "fDeliveryChargeBuyAnyService", precision: 12 })
  fDeliveryChargeBuyAnyService: number;

  @Column("float", {
    name: "fDeliveryChargeBuyAnyServiceCancelledOrder",
    precision: 12,
  })
  fDeliveryChargeBuyAnyServiceCancelledOrder: number;
}
