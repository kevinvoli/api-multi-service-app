import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("helps_categories", { schema: "amygo1" })
export class HelpsCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "iHelpscategoryId" })
  iHelpscategoryId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vTitle", length: 255 })
  vTitle: string;

  @Column("enum", {
    name: "eTopic",
    enum: ["Front", "Admin", "RiderApp", "DriverApp", "General"],
  })
  eTopic: "Front" | "Admin" | "RiderApp" | "DriverApp" | "General";
}
