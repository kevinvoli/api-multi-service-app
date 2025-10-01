import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { Orders } from "../../../orders/entities/order.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("user-driver_wallet", ["iUserId"], {})
@Index("eUserType", ["eUserType"], {})
@Index("eType", ["eType"], {})
@Index("iOrderId", ["iOrderId"], {})
@Entity("user_wallet", { schema: "amygo1" })
export class UserWallet {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserWalletId" })
  iUserWalletId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("enum", { name: "eUserType", enum: ["Driver", "Rider"] })
  eUserType: "Driver" | "Rider";

  @Column("text", {
    name: "iBalance",
    comment:
      "text bc ratio multiplied and divide then exact value shown, not shown when 10,4",
  })
  iBalance: string;

  @Column("enum", {
    name: "eType",
    enum: ["Credit", "Debit"],
    default: "Credit",
  })
  eType: "Credit" | "Debit";

  @Column("varchar", { name: "iTripId", length: 100 })
  iTripId: string;

  @Column("enum", {
    name: "eFor",
    enum: [
      "Deposit",
      "Booking",
      "Refund",
      "Withdrawl",
      "Charges",
      "Referrer",
      "Transfer",
      "Subscription",
      "Outstanding",
    ],
    default: "Deposit",
  })
  eFor:
    | "Deposit"
    | "Booking"
    | "Refund"
    | "Withdrawl"
    | "Charges"
    | "Referrer"
    | "Transfer"
    | "Subscription"
    | "Outstanding";

  @Column("text", { name: "tDescription" })
  tDescription: string;

  @Column("enum", {
    name: "ePaymentStatus",
    enum: ["Settelled", "Unsettelled"],
    default: "Unsettelled",
  })
  ePaymentStatus: "Settelled" | "Unsettelled";

  @Column("datetime", { name: "dDate" })
  dDate: Date;

  @Column("double", {
    name: "fRatio_EUR",
    precision: 10,
    scale: 4,
    default: () => "'1.0000'",
  })
  fRatioEur: number;

  @Column("double", {
    name: "fRatio_USD",
    precision: 10,
    scale: 4,
    default: () => "'1.0000'",
  })
  fRatioUsd: number;

  @Column("double", {
    name: "fRatio_XOF",
    precision: 10,
    scale: 4,
    default: () => "'0.0000'",
  })
  fRatioXof: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @ManyToOne(() => Orders, (order) => order.userWallets)
  @JoinColumn({ name: "iOrderId", referencedColumnName: "iOrderId" })
  order: Orders;

  @Column("mediumtext", { name: "iTransactionId" })
  iTransactionId: string;

  @Column("int", { name: "fromUserId", default: "0" })
  fromUserId: number;

  @Column("enum", { name: "fromUserType", enum: ["Driver", "Rider"] })
  fromUserType: "Driver" | "Rider";

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("int", { name: "iRentItemPostId" })
  iRentItemPostId: number;

  @Column("int", { name: "iTmpRentItemPostId" })
  iTmpRentItemPostId: number;

  @Column("int", { name: "iBookingId" })
  iBookingId: number;

  @ManyToOne(() => RegisterUser, (registerUser) => registerUser.userWallets, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "iUserId", referencedColumnName: "iUserId" }])
  iUser: RegisterUser;
}
