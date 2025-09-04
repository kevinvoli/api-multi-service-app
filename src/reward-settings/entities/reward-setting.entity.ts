import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reward_settings", { schema: "amygo1" })
export class RewardSettings {
  @PrimaryGeneratedColumn({ type: "int", name: "iRewardId" })
  iRewardId: number;

  @Column("text", { name: "vLevel" })
  vLevel: string;

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

  @Column("float", {
    name: "fCredit",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCredit: number;

  @Column("varchar", { name: "vImage", length: 255 })
  vImage: string;

  @Column("int", { name: "eRewardLevel" })
  eRewardLevel: number;
}
