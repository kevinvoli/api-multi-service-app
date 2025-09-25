import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("help_detail", { schema: "amygo1" })
export class HelpDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "iHelpDetailId" })
  iHelpDetailId: number;

  @Column("int", { name: "iHelpDetailCategoryId" })
  iHelpDetailCategoryId: number;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("longtext", { name: "vTitle_EN" })
  vTitleEn: string;

  @Column("longtext", { name: "vTitle_FR" })
  vTitleFr: string;

  @Column("longtext", { name: "tAnswer_EN" })
  tAnswerEn: string;

  @Column("longtext", { name: "tAnswer_FR" })
  tAnswerFr: string;

  @Column("enum", {
    name: "eTopic",
    enum: ["Front", "Admin", "RiderApp", "DriverApp", "General"],
  })
  eTopic: "Front" | "Admin" | "RiderApp" | "DriverApp" | "General";

  @Column("enum", {
    name: "eShowDetail",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eShowDetail: "Yes" | "No";

  @Column("enum", {
    name: "eSystem",
    enum: ["General", "DeliverAll"],
    default: () => "'General'",
  })
  eSystem: "General" | "DeliverAll";
}
