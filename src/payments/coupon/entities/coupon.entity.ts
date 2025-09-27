import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("vCouponCode", ["vCouponCode"], {})
@Entity("coupon", { schema: "amygo1" })
export class Coupon {
  @PrimaryGeneratedColumn({ type: "int", name: "iCouponId" })
  iCouponId: number;

  @Column("varchar", { name: "vCouponCode", length: 50, default: "" })
  vCouponCode: string;

  @Column("longtext", { name: "tDescription" })
  tDescription: string;

  @Column("float", {
    name: "fDiscount",
    precision: 10,
    scale: 2,
    default: 0.0,
  })
  fDiscount: number;

  @Column("enum", {
    name: "eType",
    enum: ["percentage", "cash"],
    default: "percentage",
  })
  eType: "percentage" | "cash";

  @Column("enum", {
    name: "eValidityType",
    enum: ["Permanent", "Defined"],
    default: "Permanent",
  })
  eValidityType: "Permanent" | "Defined";

  @Column("date", { name: "dActiveDate", nullable: true })
  dActiveDate: string;

  @Column("date", { name: "dExpiryDate", nullable:true })
  dExpiryDate: string;

  @Column("int", { name: "iUsageLimit", default: 0 })
  iUsageLimit: number;

  @Column("int", { name: "iUsed", default: 0 })
  iUsed: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eSystemType",
    enum: ["Ride", "Delivery", "UberX", "DeliverAll", "General"],
    default: "General",
  })
  eSystemType: "Ride" | "Delivery" | "UberX" | "DeliverAll" | "General";

  @Column("enum", { name: "eFly", enum: ["1", "0"], default: "0" })
  eFly: "1" | "0";

  @Column("enum", {
    name: "vPromocodeType",
    enum: ["Public", "Private"],
    default: "Public",
  })
  vPromocodeType: "Public" | "Private";

  @Column("enum", {
    name: "eStoreType",
    enum: ["", "All", "StoreSpecific"],
    default: "",
  })
  eStoreType: "" | "All" | "StoreSpecific";

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @Column("enum", {
    name: "eFreeDelivery",
    enum: ["No", "Yes"],
    default: "No",
  })
  eFreeDelivery: "No" | "Yes";

  @Column("int", { name: "iLocationId" })
  iLocationId: number;

  @Column("datetime", {
    name: "createdDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdDate: Date;
}
