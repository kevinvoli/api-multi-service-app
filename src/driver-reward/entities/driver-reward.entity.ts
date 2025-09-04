import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_reward", { schema: "amygo1" })
export class DriverReward {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverReward" })
  iDriverReward: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iRewardId" })
  iRewardId: number;

  @Column("int", { name: "vMinimumTrips" })
  vMinimumTrips: number;

  @Column("float", {
    name: "fRatings",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRatings: number;

  @Column("int", { name: "iAcceptanceRate" })
  iAcceptanceRate: number;

  @Column("int", { name: "iCancellationRate" })
  iCancellationRate: number;

  @Column("int", { name: "iDuration" })
  iDuration: number;

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;

  @Column("float", { name: "fCredit", precision: 10, scale: 2 })
  fCredit: number;

  @Column("int", { name: "iCampaignId" })
  iCampaignId: number;

  @Column("int", { name: "eRewardLevel" })
  eRewardLevel: number;
}
