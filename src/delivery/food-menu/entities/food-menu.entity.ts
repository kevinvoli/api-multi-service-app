
import { Intentions } from "src/business-logic/intentions/entities/intention.entity";
import { MenuItems } from "../../menu-items/entities/menu-item.entity";
import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Index("iCompanyId", ["iCompanyId"], {})
@Index("iCompanyId_2", ["iCompanyId"], {})
@Index("eStatus", ["eStatus"], {})
@Index("iFoodMenuId", ["iFoodMenuId"], {})
@Entity("food_menu", { schema: "amygo1" })
export class FoodMenu {
  @PrimaryGeneratedColumn({ type: "int", name: "iFoodMenuId" })
  iFoodMenuId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("longtext", { name: "vMenu_EN" })
  vMenuEn: string;

  @Column("longtext", { name: "vMenu_FR" })
  vMenuFr: string;

  @Column("longtext", { name: "vMenuDesc_EN" })
  vMenuDescEn: string;

  @Column("longtext", { name: "vMenuDesc_FR" })
  vMenuDescFr: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vImage", length: 255 })
  vImage: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eBuyAnyService",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBuyAnyService: "Yes" | "No";

  @Column("int", { name: "iFoodMenuImageId" })
  iFoodMenuImageId: number;

  @Column("longtext", { name: "vImageName" })
  vImageName: string;

  @Column("datetime", { name: "dDateAdded" })
  dDateAdded: Date;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @OneToMany(() => Intentions, (intention) => intention.item)
  intentions: Intentions[];

  @OneToMany(() => MenuItems, (menuItem) => menuItem.foodMenu)
  menuItems: MenuItems[];
}
