import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menuitem_options_category", { schema: "amygo1" })
export class MenuitemOptionsCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "iOptionsCategoryId" })
  iOptionsCategoryId: number;

  @Column("int", { name: "iMenuItemId" })
  iMenuItemId: number;

  @Column("text", { name: "tCategoryName" })
  tCategoryName: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
