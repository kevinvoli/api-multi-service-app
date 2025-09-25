import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SERVICE_NAME", ["areaName"], { unique: true })
@Entity("__oda_areas_location", { schema: "amygo1" })
export class OdaAreasLocation {
  @PrimaryGeneratedColumn({ type: "int", name: "area_id" })
  areaId: number;

  @Column("longtext", {
    name: "area_name",
    unique: true,
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
  })
  areaName: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";
}
