import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bidding_offer", { schema: "amygo1" })
export class BiddingOffer {
  @PrimaryGeneratedColumn({ type: "int", name: "IOfferId" })
  iOfferId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("enum", { name: "UserType", enum: ["Passenger", "Driver"] })
  userType: "Passenger" | "Driver";

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("longtext", { name: "description" })
  description: string;

  @Column("decimal", { name: "amount", precision: 10, scale: 4 })
  amount: string;

  @Column("decimal", { name: "fRatio_EUR", precision: 10, scale: 4 })
  fRatioEur: string;

  @Column("decimal", { name: "fRatio_USD", precision: 10, scale: 4 })
  fRatioUsd: string;

  @Column("double", {
    name: "fRatio_XOF",
    precision: 10,
    scale: 4,
    default: () => "'0.0000'",
  })
  fRatioXof: number;

  @Column("timestamp", { name: "date", default: () => "CURRENT_TIMESTAMP" })
  date: Date;

  @Column("enum", {
    name: "eStatus",
    enum: ["Accepted", "Reoffer", "Decline"],
    default: () => "'Reoffer'",
  })
  eStatus: "Accepted" | "Reoffer" | "Decline";

  @Column("int", { name: "iCancelReasonId" })
  iCancelReasonId: number;

  @Column("longtext", { name: "vCancelReason" })
  vCancelReason: string;
}
