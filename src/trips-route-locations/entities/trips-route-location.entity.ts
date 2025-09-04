import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("RouteUnique", ["iTripId", "eType"], { unique: true })
@Index("iTripId", ["iTripId", "eType"], {})
@Entity("trips_route_locations", { schema: "amygo1" })
export class TripsRouteLocations {
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

  @Column("longtext", {
    name: "tPath",
    comment: "This will contains locations which are passed to google api",
  })
  tPath: string;

  @Column("mediumtext", { name: "tDistance" })
  tDistance: string;

  @Column("mediumtext", { name: "tDuration" })
  tDuration: string;

  @Column("enum", { name: "eType", enum: ["SnapToRoad", "GoogleDirection"] })
  eType: "SnapToRoad" | "GoogleDirection";
}
