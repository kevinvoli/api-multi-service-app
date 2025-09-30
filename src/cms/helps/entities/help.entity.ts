import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { HelpsCategories } from "../../helps-categories/entities/helps-category.entity";

@Entity("helps", { schema: "amygo1" })
export class Helps {
  @PrimaryGeneratedColumn({ type: "int", name: "iHelpsId" })
  iHelpsId: number;

  @Column("int", { name: "iHelpscategoryId" })
  iHelpscategoryId: number;

  @ManyToOne(() => HelpsCategories, (helpsCategory) => helpsCategory.helps)
  @JoinColumn({
    name: "iHelpscategoryId",
    referencedColumnName: "iHelpscategoryId",
  })
  helpsCategory: HelpsCategories;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("text", { name: "vTitle" })
  vTitle: string;

  @Column("text", { name: "tDescription" })
  tDescription: string;
}
