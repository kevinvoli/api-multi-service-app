import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SERVICE_NAME", ["itemTypeLocationName"], { unique: true })
@Entity("__oda_items_types_location", { schema: "amygo1" })
export class OdaItemsTypesLocation {
  @PrimaryGeneratedColumn({ type: "int", name: "item_type_location_id" })
  itemTypeLocationId: number;

  @Column("int", { name: "item_type", nullable: true })
  itemType: number | null;

  @Column("longtext", {
    name: "item_type_location_name",
    unique: true,
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
  })
  itemTypeLocationName: string;

  @Column("mediumtext", {
    name: "item_type_location_image",
    comment:
      'Image must be in the ratio of "16:9". Minimum resolution is 2880*1620.',
  })
  itemTypeLocationImage: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";
}
