import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reward_campaign", { schema: "amygo1" })
export class RewardCampaign {
  @PrimaryGeneratedColumn({ type: "int", name: "iCampaignId" })
  iCampaignId: number;

  @Column("text", { name: "vTitle" })
  vTitle: string;

  @Column("date", { name: "dStart_date" })
  dStartDate: string;

  @Column("date", { name: "dEnd_date" })
  dEndDate: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Cancelled", "Expired", "Deleted"],
    default: () => "'Inactive'",
  })
  eStatus: "Active" | "Inactive" | "Cancelled" | "Expired" | "Deleted";

  @Column("enum", {
    name: "eCurrentActive",
    enum: ["No", "Yes"],
    default: () => "'No'",
  })
  eCurrentActive: "No" | "Yes";
}
