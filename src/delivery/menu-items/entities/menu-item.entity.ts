import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { FoodMenu } from "../../food-menu/entities/food-menu.entity";
import { Company } from "../../../users/company/entities/company.entity";
import { MenuitemOptions } from "../menu-item-options/entities/menu-item-option.entity";
import { MenuitemOptionsCategory } from "../menu-item-options-category/entities/menu-item-options-category.entity";

@Index("iFoodMenuId", ["iFoodMenuId"], {})
@Index("eFoodType", ["eFoodType"], {})
@Index("eStatus", ["eStatus"], {})
@Index("eAvailable", ["eAvailable"], {})
@Index("eBestSeller", ["eBestSeller"], {})
@Index("eRecommended", ["eRecommended"], {})
@Index("iMenuItemId", ["iMenuItemId"], {})
@Index("store", ["store"], {})
@Entity("menu_items", { schema: "amygo1" })
export class MenuItems {
  @PrimaryGeneratedColumn({ type: "int", name: "iMenuItemId" })
  iMenuItemId: number;

  @Column({ type: "int", name: "store", nullable: true })
  storeId: number | null;

  @ManyToOne(() => Company, (company) => company.menuItems)
  @JoinColumn({ name: "store", referencedColumnName: "iCompanyId" })
  store: Company;

  @Column("int", { name: "iFoodMenuId", default: "0" })
  iFoodMenuId: number;

  @ManyToOne(() => FoodMenu, (foodMenu) => foodMenu.menuItems)
  @JoinColumn({ name: "iFoodMenuId", referencedColumnName: "iFoodMenuId" })
  foodMenu: FoodMenu;

  @Column("varchar", { name: "vItemType_EN", length: 255 })
  vItemTypeEn: string;

  @Column("varchar", { name: "vItemType_FR", length: 255 })
  vItemTypeFr: string;

  @Column("text", { name: "vItemDesc_EN" })
  vItemDescEn: string;

  @Column("text", { name: "vItemDesc_FR" })
  vItemDescFr: string;

  @Column("float", { name: "fPrice", precision: 12 })
  fPrice: number;

  @Column("enum", { name: "eFoodType", enum: ["Veg", "NonVeg", ""] })
  eFoodType: "Veg" | "NonVeg" | "";

  @Column("float", {
    name: "fOfferAmt",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fOfferAmt: number;

  @Column("varchar", { name: "vImage", length: 255 })
  vImage: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eAvailable",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eAvailable: "Yes" | "No";

  @Column("enum", {
    name: "eBestSeller",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBestSeller: "Yes" | "No";

  @Column("enum", {
    name: "eRecommended",
    enum: ["Yes", "No"],
    default: "No",
  })
  eRecommended: "Yes" | "No";

  @Column("varchar", { name: "vHighlightName", length: 255 })
  vHighlightName: string;

  @Column("enum", {
    name: "prescription_required",
    enum: ["Yes", "No"],
    default: "No",
  })
  prescriptionRequired: "Yes" | "No";

  @Column("enum", {
    name: "eImgDownload",
    enum: ["Yes", "No"],
    default: "No",
  })
  eImgDownload: "Yes" | "No";

  @Column("enum", {
    name: "eBuyAnyService",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBuyAnyService: "Yes" | "No";

  @Column("text", { name: "vItemTypeBuyAnyService" })
  vItemTypeBuyAnyService: string;

  @Column("varchar", { name: "vSKU", length: 100 })
  vSku: string;

  @Column("int", { name: "ss_location", nullable: true })
  ssLocation: number | null;

  @Column("int", { name: "area", nullable: true })
  area: number | null;

  @Column("varchar", { name: "surface", nullable: true, length: 10 })
  surface: string | null;

  @Column("int", { name: "item_categorie_location", nullable: true })
  itemCategorieLocation: number | null;

  @Column("int", { name: "item_sous_categorie_location", nullable: true })
  itemSousCategorieLocation: number | null;

  @Column("varchar", { name: "commodities", nullable: true, length: 255 })
  commodities: string | null;

  @Column("int", { name: "commune_id" })
  communeId: number;

  @Column("varchar", { name: "lat", nullable: true, length: 255 })
  lat: string | null;

  @Column("varchar", { name: "lng", nullable: true, length: 255 })
  lng: string | null;

  @Column("varchar", { name: "adresse", nullable: true, length: 255 })
  adresse: string | null;

  @OneToMany(
    () => MenuitemOptions,
    (menuItemOption) => menuItemOption.menuItem,
  )
  menuItemOptions: MenuitemOptions[];

  @OneToMany(
    () => MenuitemOptionsCategory,
    (menuItemOptionsCategory) => menuItemOptionsCategory.menuItem,
  )
  menuItemOptionsCategories: MenuitemOptionsCategory[];
}
