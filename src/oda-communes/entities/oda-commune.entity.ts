import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("SERVICE_NAME", ["communeName"], { unique: true })
@Entity("__oda_communes", { schema: "amygo1" })
export class OdaCommunes {
  @PrimaryGeneratedColumn({ type: "int", name: "commune_id" })
  communeId: number;

  @Column("varchar", {
    name: "commune_name",
    nullable: true,
    unique: true,
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
    length: 50,
  })
  communeName: string | null;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | null;
}
