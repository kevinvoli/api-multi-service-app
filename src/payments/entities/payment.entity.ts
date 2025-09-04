import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("payments", { schema: "amygo1" })
export class Payments {
  @PrimaryGeneratedColumn({ type: "int", name: "iPaymentId" })
  iPaymentId: number;

  @Column("longtext", { name: "tPaymentUserID" })
  tPaymentUserId: string;

  @Column("longtext", { name: "vPaymentUserStatus" })
  vPaymentUserStatus: string;

  @Column("enum", {
    name: "ePaymentDriverStatus",
    enum: ["Paid", "UnPaid"],
    default: () => "'UnPaid'",
  })
  ePaymentDriverStatus: "Paid" | "UnPaid";

  @Column("longtext", { name: "tPaymentDriverID" })
  tPaymentDriverId: string;

  @Column("int", { name: "iTripId", comment: "link with trips" })
  iTripId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("float", { name: "fCommision", precision: 12, default: () => "'0'" })
  fCommision: number;

  @Column("float", { name: "iAmountUser", precision: 12, default: () => "'0'" })
  iAmountUser: number;

  @Column("float", {
    name: "iAmountDriver",
    precision: 12,
    default: () => "'0'",
  })
  iAmountDriver: number;

  @Column("text", { name: "tPaymentDetails" })
  tPaymentDetails: string;

  @Column("varchar", { name: "vPaymentMode", length: 500 })
  vPaymentMode: string;

  @Column("int", { name: "iUserWalletId" })
  iUserWalletId: number;

  @Column("int", { name: "iTripOutstandId" })
  iTripOutstandId: number;

  @Column("varchar", { name: "vPaymentMethod", length: 500 })
  vPaymentMethod: string;

  @Column("enum", {
    name: "eEvent",
    enum: [
      "",
      "Wallet",
      "Trip",
      "TripTip",
      "OutStanding",
      "OrderPayment",
      "SubscribePayment",
      "OrderTip",
      "Bidding",
      "giftCard",
      "RideShareBooking",
    ],
  })
  eEvent:
    | ""
    | "Wallet"
    | "Trip"
    | "TripTip"
    | "OutStanding"
    | "OrderPayment"
    | "SubscribePayment"
    | "OrderTip"
    | "Bidding"
    | "giftCard"
    | "RideShareBooking";

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("enum", { name: "eUserType", enum: ["Passenger", "Driver"] })
  eUserType: "Passenger" | "Driver";

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("int", { name: "iGiftCardId" })
  iGiftCardId: number;

  @Column("int", { name: "iRentItemPostId" })
  iRentItemPostId: number;

  @Column("int", { name: "iTmpRentItemPostId" })
  iTmpRentItemPostId: number;

  @Column("int", { name: "iBookingId" })
  iBookingId: number;
}
