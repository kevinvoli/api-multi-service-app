import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MenuItems } from "../../menu-items/entities/menu-item.entity";

@Index("iMenuItemId", ["iMenuItemId"], {})
@Index("eDefault", ["eDefault"], {})
@Index("eStatus", ["eStatus"], {})
@Index("iOptionId", ["iOptionId"], {})
@Entity("menuitem_options", { schema: "amygo1" })
export class MenuitemOptions {
  @PrimaryGeneratedColumn({ type: "int", name: "iOptionId" })
  iOptionId: number;

  @Column("int", { name: "iMenuItemId" })
  iMenuItemId: number;

  @ManyToOne(() => MenuItems, (menuItem) => menuItem.menuItemOptions)
  @JoinColumn({ name: "iMenuItemId", referencedColumnName: "iMenuItemId" })
  menuItem: MenuItems;

  @Column("varchar", { name: "vOptionName", length: 255 })
  vOptionName: string;

  @Column("float", { name: "fPrice", precision: 12 })
  fPrice: number;

  @Column("enum", { name: "eOptionType", enum: ["Options", "Addon"] })
  eOptionType: "Options" | "Addon";

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDefault: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("longtext", { name: "tOptionNameLang" })
  tOptionNameLang: string;

  @Column("text", { name: "vImage" })
  vImage: string;

  @Column("int", { name: "iOptionsCategoryId" })
  iOptionsCategoryId: number;

  @Column("longtext", { name: "tOptionAddonTitle" })
  tOptionAddonTitle: string;
}
