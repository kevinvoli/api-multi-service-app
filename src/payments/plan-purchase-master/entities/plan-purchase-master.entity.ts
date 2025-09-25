import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("plan_purchase_master", { schema: "amygo1" })
export class PlanPurchaseMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "iPurchaseId" })
  iPurchaseId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("date", { name: "dStartDate" })
  dStartDate: string;

  @Column("int", { name: "iPlanId" })
  iPlanId: number;

  @Column("enum", {
    name: "ePlanType",
    comment: "Order,Ride",
    enum: ["Order", "Ride"],
    default: () => "'Order'",
  })
  ePlanType: "Order" | "Ride";

  @Column("int", { name: "iDuration" })
  iDuration: number;

  @Column("enum", {
    name: "eDurationType",
    comment: "Day,Month,Year",
    enum: ["Day", "Month", "Year"],
    default: () => "'Month'",
  })
  eDurationType: "Day" | "Month" | "Year";

  @Column("int", { name: "iNOfTripsOrders" })
  iNOfTripsOrders: number;

  @Column("float", {
    name: "fNoOfKM",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fNoOfKm: number;

  @Column("int", { name: "iAppliedCount" })
  iAppliedCount: number;

  @Column("int", { name: "iAppliedKM" })
  iAppliedKm: number;

  @Column("enum", {
    name: "eSubscriptionStatus",
    comment: "Yes,No",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eSubscriptionStatus: "Yes" | "No";

  @Column("float", { name: "fPaidAmount", precision: 10, scale: 2 })
  fPaidAmount: number;

  @Column("varchar", { name: "vCurrency", length: 100 })
  vCurrency: string;

  @Column("enum", {
    name: "ePaidStatus",
    comment: "Pending,Paid",
    enum: ["Pending", "Paid"],
    default: () => "'Pending'",
  })
  ePaidStatus: "Pending" | "Paid";

  @Column("timestamp", {
    name: "tPaidDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tPaidDateTime: Date;

  @Column("enum", {
    name: "eIsExpire",
    comment: "Yes,No",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eIsExpire: "Yes" | "No";

  @Column("timestamp", {
    name: "dExpiredDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  dExpiredDate: Date;

  @Column("enum", {
    name: "eStatus",
    comment: "Active,Inactive",
    enum: ["Active", "Inactive"],
  })
  eStatus: "Active" | "Inactive";

  @Column("varchar", { name: "vPaymentGateway", length: 100 })
  vPaymentGateway: string;
}
