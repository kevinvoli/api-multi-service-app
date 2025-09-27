import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("store_categories", { schema: "amygo1" })
export class StoreCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "iCategoryId" })
  iCategoryId: number;

  @Column("longtext", { name: "tCategoryName" })
  tCategoryName: string;

  @Column("longtext", { name: "tCategoryDescription" })
  tCategoryDescription: string;

  @Column("varchar", { name: "tCategoryImage", length: 250 })
  tCategoryImage: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eType",
    enum: ["manual", "newly_open", "offers", "list_all"],
  })
  eType: "manual" | "newly_open" | "offers" | "list_all";

  @Column("int", { name: "iDaysRange" })
  iDaysRange: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;
}
