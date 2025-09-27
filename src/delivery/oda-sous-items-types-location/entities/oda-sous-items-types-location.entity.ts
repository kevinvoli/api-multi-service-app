import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("__oda_sous_items_types_location", { schema: "amygo1" })
export class OdaSousItemsTypesLocation {
  @PrimaryGeneratedColumn({ type: "int", name: "sous_type_location_id" })
  sousTypeLocationId: number;

  @Column("int", { name: "item_type", nullable: true })
  itemType: number | null;

  @Column("longtext", {
    name: "sous_type_location_name",
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
  })
  sousTypeLocationName: string;

  @Column("mediumtext", {
    name: "sous_type_location_image",
    comment:
      'Image must be in the ratio of "16:9". Minimum resolution is 2880*1620.',
  })
  sousTypeLocationImage: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";
}
