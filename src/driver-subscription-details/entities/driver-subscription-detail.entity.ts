import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_subscription_details", { schema: "amygo1" })
export class DriverSubscriptionDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverSubscriptionDetailsId" })
  iDriverSubscriptionDetailsId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iDriverSubscriptionPlanId" })
  iDriverSubscriptionPlanId: number;

  @Column("varchar", { name: "vPlanName", length: 100 })
  vPlanName: string;

  @Column("int", { name: "vPlanPeriod" })
  vPlanPeriod: number;

  @Column("enum", {
    name: "ePlanValidity",
    enum: ["Daily", "Weekly", "Monthly", "Yearly"],
  })
  ePlanValidity: "Daily" | "Weekly" | "Monthly" | "Yearly";

  @Column("varchar", { name: "vPlanDescription", length: 150 })
  vPlanDescription: string;

  @Column("timestamp", {
    name: "tSubscribeDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  tSubscribeDate: Date;

  @Column("timestamp", {
    name: "tExpiryDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  tExpiryDate: Date;

  @Column("timestamp", {
    name: "tClosedDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  tClosedDate: Date;

  @Column("enum", {
    name: "eSubscriptionStatus",
    enum: ["Subscribed", "UnSubscribed", "Expired", "Cancelled", "Inactive"],
    default: () => "'UnSubscribed'",
  })
  eSubscriptionStatus:
    | "Subscribed"
    | "UnSubscribed"
    | "Expired"
    | "Cancelled"
    | "Inactive";

  @Column("int", { name: "iWalletId" })
  iWalletId: number;

  @Column("int", { name: "iPaymentId" })
  iPaymentId: number;

  @Column("float", { name: "fprice", precision: 10, scale: 2 })
  fprice: number;

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
}
