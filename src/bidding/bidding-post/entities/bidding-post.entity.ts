import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";

@Entity("bidding_post", { schema: "amygo1" })
export class BiddingPost {
  @PrimaryGeneratedColumn({ type: "int", name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("longtext", { name: "iBiddingId" })
  iBiddingId: string;

  @Column("int", { name: "vBiddingPostNo" })
  vBiddingPostNo: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @ManyToOne(() => RegisterUser, (user) => user.biddingPosts)
  @JoinColumn({ name: "iUserId", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.biddingPosts)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("text", { name: "fBiddingAmount" })
  fBiddingAmount: string;

  @Column("longtext", { name: "tDescription" })
  tDescription: string;

  @Column("varchar", { name: "vCurrencyPassenger", length: 255 })
  vCurrencyPassenger: string;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("datetime", { name: "dBiddingDate" })
  dBiddingDate: Date;

  @Column("int", { name: "iAddressId" })
  iAddressId: number;

  @Column("varchar", { name: "vContactName", length: 255 })
  vContactName: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Pending", "Accepted", "Completed", "Cancelled"],
    default: "Pending",
  })
  eStatus: "Pending" | "Accepted" | "Completed" | "Cancelled";

  @Column("decimal", { name: "fRatio_EUR", precision: 10, scale: 4 })
  fRatioEur: string;

  @Column("decimal", { name: "fRatio_USD", precision: 10, scale: 4 })
  fRatioUsd: string;

  @Column("double", {
    name: "fRatio_XOF",
    precision: 10,
    scale: 4,
    default: "0.0000",
  })
  fRatioXof: number;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("int", { name: "iCancelReasonId" })
  iCancelReasonId: number;

  @Column("text", { name: "vCancelReason" })
  vCancelReason: string;

  @Column("int", { name: "iCancelByUserId" })
  iCancelByUserId: number;

  @Column("datetime", { name: "dCancelDate" })
  dCancelDate: Date;

  @Column("enum", {
    name: "eCancelBy",
    enum: ["Driver", "User"],
    default: "User",
  })
  eCancelBy: "Driver" | "User";

  @Column("enum", { name: "ePaymentOption", enum: ["Cash", "Card", "Wallet"] })
  ePaymentOption: "Cash" | "Card" | "Wallet";

  @Column("enum", { name: "eWalletDebit", enum: ["No", "Yes"] })
  eWalletDebit: "No" | "Yes";

  @Column("decimal", { name: "fWalletDebit", precision: 10, scale: 4 })
  fWalletDebit: string;

  @Column("enum", { name: "ePaid", enum: ["No", "Yes"] })
  ePaid: "No" | "Yes";

  @Column("enum", {
    name: "vTaskStatus",
    enum: ["Pending", "Active", "Arrived", "Ongoing", "Finished", "Cancelled"],
    default:  "Pending",
  })
  vTaskStatus:
    | "Pending"
    | "Active"
    | "Arrived"
    | "Ongoing"
    | "Finished"
    | "Cancelled";

  @Column("datetime", { name: "dConfirmDate" })
  dConfirmDate: Date;

  @Column("datetime", { name: "dStartDate" })
  dStartDate: Date;

  @Column("datetime", { name: "dTaskArrivedDate" })
  dTaskArrivedDate: Date;

  @Column("datetime", { name: "dTaskStartDate" })
  dTaskStartDate: Date;

  @Column("datetime", { name: "dTaskEndDate" })
  dTaskEndDate: Date;

  @Column("int", { name: "iPaymentInfoId" })
  iPaymentInfoId: number;

  @Column("decimal", { name: "fCommission", precision: 10, scale: 2 })
  fCommission: string;

  @Column("decimal", { name: "tUserWalletBalance", precision: 10, scale: 2 })
  tUserWalletBalance: string;

  @Column("decimal", { name: "tEstimatedCharge", precision: 10, scale: 2 })
  tEstimatedCharge: string;

  @Column("decimal", { name: "fOutStandingAmount", precision: 10, scale: 2 })
  fOutStandingAmount: string;

  @Column("enum", {
    name: "eDriverPaymentStatus",
    enum: ["Settelled", "Unsettelled"],
    default: "Unsettelled",
  })
  eDriverPaymentStatus: "Settelled" | "Unsettelled";

  @Column("int", { name: "vRandomCode" })
  vRandomCode: number;

  @Column("enum", { name: "eAskCodeToUser", enum: ["Yes", "No"] })
  eAskCodeToUser: "Yes" | "No";

  @Column("int", { name: "cronCount" })
  cronCount: number;

  @Column("enum", {
    name: "isSkipRating",
    enum: ["Yes", "No"],
    default: "No",
  })
  isSkipRating: "Yes" | "No";
}
