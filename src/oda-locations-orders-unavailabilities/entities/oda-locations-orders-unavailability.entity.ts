import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("__oda_locations_orders_unavailabilities", { schema: "amygo1" })
export class OdaLocationsOrdersUnavailabilities {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "item_id" })
  itemId: number;

  @Column("enum", {
    name: "status",
    comment: "Relation with location item status",
    enum: ["active", "inactive", "", ""],
    default: () => "'active'",
  })
  status: "active" | "inactive" | "" | "";

  @Column("datetime", {
    name: "date_enreg",
    default: () => "CURRENT_TIMESTAMP",
  })
  dateEnreg: Date;

  @Column("datetime", { name: "date_debut", nullable: true })
  dateDebut: Date | null;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("datetime", { name: "date_fin", nullable: true })
  dateFin: Date | null;
}
