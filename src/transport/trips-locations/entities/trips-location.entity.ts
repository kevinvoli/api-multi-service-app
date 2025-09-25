import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trips_locations", { schema: "amygo1" })
export class TripsLocations {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripLocationId" })
  iTripLocationId: number;

  @Column("int", { name: "iTripId", comment: "Link with Trips" })
  iTripId: number;

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;

  @Column("longtext", { name: "tPlatitudes" })
  tPlatitudes: string;

  @Column("longtext", { name: "tPlongitudes" })
  tPlongitudes: string;
}
