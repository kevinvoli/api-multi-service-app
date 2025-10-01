import { PlanPurchaseMaster } from "../../../payments/plan-purchase-master/entities/plan-purchase-master.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_subscription_plan", { schema: "amygo1" })
export class DriverSubscriptionPlan {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverSubscriptionPlanId" })
  iDriverSubscriptionPlanId: number;

  @Column("varchar", { name: "vPlanName", length: 100 })
  vPlanName: string;

  @Column("varchar", { name: "vPlanName_EN", length: 100 })
  vPlanNameEn: string;

  @Column("varchar", { name: "vPlanName_FR", length: 100 })
  vPlanNameFr: string;

  @Column("int", { name: "vPlanPeriod" })
  vPlanPeriod: number;

  @Column("enum", {
    name: "ePlanValidity",
    enum: ["Daily", "Weekly", "Monthly", "Yearly"],
  })
  ePlanValidity: "Daily" | "Weekly" | "Monthly" | "Yearly";

  @Column("float", { name: "fPrice", precision: 12 })
  fPrice: number;

  @Column("varchar", { name: "vPlanDescription", length: 150 })
  vPlanDescription: string;

  @Column("text", { name: "vPlanDescription_EN", nullable: true })
  vPlanDescriptionEn: string | null;

  @Column("text", { name: "vPlanDescription_FR" })
  vPlanDescriptionFr: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("timestamp", {
    name: "tSubscribeDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tSubscribeDate: Date;

  @OneToMany(
    () => PlanPurchaseMaster,
    (planPurchase) => planPurchase.plan,
  )
  planPurchases: PlanPurchaseMaster[];
}
