import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_order_details", { schema: "amygo1" })
export class TripOrderDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderDetailId" })
  iOrderDetailId: number;

  @Column("text", { name: "iCabBookingId" })
  iCabBookingId: string;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("int", { name: "iMenuItemId" })
  iMenuItemId: number;

  @Column("int", { name: "iQuantity" })
  iQuantity: number;

  @Column("float", { name: "fPrice", precision: 10, scale: 2 })
  fPrice: number;

  @Column("float", { name: "fTotalPrice", precision: 10, scale: 2 })
  fTotalPrice: number;

  @Column("text", { name: "tMenuItemOptions" })
  tMenuItemOptions: string;

  @Column("text", { name: "tMenuItemAddOns" })
  tMenuItemAddOns: string;
}
