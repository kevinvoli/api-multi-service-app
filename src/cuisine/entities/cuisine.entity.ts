import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iServiceId", ["iServiceId"], {})
@Index("cuisineId", ["cuisineId"], {})
@Entity("cuisine", { schema: "amygo1" })
export class Cuisine {
  @PrimaryGeneratedColumn({ type: "int", name: "cuisineId" })
  cuisineId: number;

  @Column("int", {
    name: "iServiceId",
    comment: "linked to service_categories table",
    default: () => "'1'",
  })
  iServiceId: number;

  @Column("text", { name: "cuisineName" })
  cuisineName: string;

  @Column("text", { name: "cuisineName_EN" })
  cuisineNameEn: string;

  @Column("text", { name: "cuisineName_FR" })
  cuisineNameFr: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive", "Deleted"] })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("text", { name: "vImage" })
  vImage: string;

  @Column("varchar", { name: "vBgColor", length: 10 })
  vBgColor: string;

  @Column("varchar", { name: "vTextColor", length: 10 })
  vTextColor: string;

  @Column("varchar", { name: "vBorderColor", length: 10 })
  vBorderColor: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eDefault",
    enum: ["No", "Yes"],
    default: () => "'No'",
  })
  eDefault: "No" | "Yes";
}
