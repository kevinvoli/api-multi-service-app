import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SERVICE_NAME", ["sousServiceName"], { unique: true })
@Entity("__oda_sous_services_location", { schema: "amygo1" })
export class OdaSousServicesLocation {
  @PrimaryGeneratedColumn({ type: "int", name: "sous_service_id" })
  sousServiceId: number;

  @Column("int", { name: "system_ref_id", nullable: true })
  systemRefId: number | null;

  @Column("longtext", {
    name: "sous_service_name",
    unique: true,
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
  })
  sousServiceName: string;

  @Column("mediumtext", {
    name: "ss_image",
    comment:
      'Image must be in the ratio of "16:9". Minimum resolution is 2880*1620.',
  })
  ssImage: string;

  @Column("tinytext", { name: "color", nullable: true })
  color: string | null;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";
}
