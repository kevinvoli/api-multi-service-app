import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("help_detail_categories", { schema: "amygo1" })
export class HelpDetailCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "iHelpDetailCategoryId" })
  iHelpDetailCategoryId: number;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vTitle", nullable: true, length: 100 })
  vTitle: string | null;

  @Column("varchar", { name: "vImage", length: 100 })
  vImage: string;

  @Column("varchar", { name: "vCode", length: 100 })
  vCode: string;

  @Column("int", { name: "iUniqueId" })
  iUniqueId: number;

  @Column("enum", {
    name: "eSystem",
    enum: ["General", "DeliverAll"],
    default: "General",
  })
  eSystem: "General" | "DeliverAll";
}
