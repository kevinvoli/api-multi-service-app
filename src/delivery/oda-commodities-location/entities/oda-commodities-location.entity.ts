import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("__oda_commodities_location", { schema: "amygo1" })
export class OdaCommoditiesLocation {
  @PrimaryGeneratedColumn({ type: "int", name: "commoditie_id" })
  commoditieId: number;

  @Column("int", { name: "item_type", nullable: true })
  itemType: number | null;

  @Column("longtext", {
    name: "commoditie_name",
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
  })
  commoditieName: string;

  @Column("mediumtext", {
    name: "commoditie_image",
    comment:
      'Image must be in the ratio of "16:9". Minimum resolution is 2880*1620.',
  })
  commoditieImage: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";
}
