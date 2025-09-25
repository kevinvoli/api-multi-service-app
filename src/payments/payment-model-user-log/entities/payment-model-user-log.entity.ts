import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payment_mode_user_log", { schema: "amygo1" })
export class PaymentModeUserLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iLogId" })
  iLogId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("enum", { name: "eUserType", enum: ["Passenger", "Driver"] })
  eUserType: "Passenger" | "Driver";

  @Column("text", { name: "tRequestData" })
  tRequestData: string;

  @Column("enum", {
    name: "eType",
    enum: [
      "Ride",
      "Deliver",
      "Multi-Delivery",
      "DeliverAll",
      "UberX",
      "Bidding",
      "RideShare",
    ],
  })
  eType:
    | "Ride"
    | "Deliver"
    | "Multi-Delivery"
    | "DeliverAll"
    | "UberX"
    | "Bidding"
    | "RideShare";

  @Column("datetime", { name: "dDateTime" })
  dDateTime: Date;

  @Column("varchar", { name: "vPromocode", length: 50 })
  vPromocode: string;
}
