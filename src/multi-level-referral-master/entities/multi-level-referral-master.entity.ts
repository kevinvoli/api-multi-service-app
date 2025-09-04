import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("multi_level_referral_master", { schema: "amygo1" })
export class MultiLevelReferralMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "iReferralId" })
  iReferralId: number;

  @Column("longtext", { name: "vTitle" })
  vTitle: string;

  @Column("decimal", { name: "iAmount", precision: 15, scale: 10 })
  iAmount: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Deleted";

  @Column("int", { name: "iLevel" })
  iLevel: number;
}
