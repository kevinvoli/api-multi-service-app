import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MenuItems } from "../../menu-items/entities/menu-item.entity";

@Entity("menuitem_options_category", { schema: "amygo1" })
export class MenuitemOptionsCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "iOptionsCategoryId" })
  iOptionsCategoryId: number;

  @Column("int", { name: "iMenuItemId" })
  iMenuItemId: number;

  @ManyToOne(
    () => MenuItems,
    (menuItem) => menuItem.menuItemOptionsCategories,
  )
  @JoinColumn({ name: "iMenuItemId", referencedColumnName: "iMenuItemId" })
  menuItem: MenuItems;

  @Column("text", { name: "tCategoryName" })
  tCategoryName: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
