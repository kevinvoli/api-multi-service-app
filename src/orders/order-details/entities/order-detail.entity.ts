import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iOrderId", ["iOrderId"], {})
@Entity("__order_details", { schema: "amygo1" })
export class OrderDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderDetailId" })
  iOrderDetailId: number;

  @Column("int", { name: "iOrderId", default: "0" })
  iOrderId: number;

  @Column("int", { name: "iFoodMenuId" })
  iFoodMenuId: number;

  @Column("int", { name: "iMenuItemId" })
  iMenuItemId: number;

  @Column("float", {
    name: "fOriginalPrice",
    precision: 12,
    default: "0",
  })
  fOriginalPrice: number;

  @Column("float", {
    name: "fDiscountPrice",
    precision: 12,
    default: "0",
  })
  fDiscountPrice: number;

  @Column("float", { name: "fPrice", precision: 12, default: "0" })
  fPrice: number;

  @Column("varchar", { name: "vOptionId", length: 100 })
  vOptionId: string;

  @Column("varchar", {
    name: "vOptionPrice",
    length: 200,
    default: "0",
  })
  vOptionPrice: string;

  @Column("varchar", { name: "vAddonId", length: 100 })
  vAddonId: string;

  @Column("varchar", { name: "vAddonPrice", length: 200 })
  vAddonPrice: string;

  @Column("float", { name: "fSubTotal", precision: 12, default: "0" })
  fSubTotal: number;

  @Column("int", { name: "iQty", default: "0" })
  iQty: number;

  @Column("float", {
    name: "fTotalDiscountPrice",
    precision: 12,
    default: "0",
  })
  fTotalDiscountPrice: number;

  @Column("float", { name: "fTotalPrice", precision: 12, default: "0" })
  fTotalPrice: number;

  @Column("date", { name: "dDate", default: () => "CURRENT_TIMESTAMP" })
  dDate: string;

  @Column("enum", {
    name: "eAvailable",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eAvailable: "Yes" | "No";

  @Column("text", { name: "tOptionAddonAttribute" })
  tOptionAddonAttribute: string;

  @Column("text", { name: "tOptionIdOrigPrice" })
  tOptionIdOrigPrice: string;

  @Column("text", { name: "tAddOnIdOrigPrice" })
  tAddOnIdOrigPrice: string;

  @Column("mediumtext", { name: "tInstruction" })
  tInstruction: string;

  @Column("enum", {
    name: "eExtraPayment",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eExtraPayment: "Yes" | "No";
}
