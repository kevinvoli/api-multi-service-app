import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_destinations", { schema: "amygo1" })
export class TripDestinations {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripDestinationId" })
  iTripDestinationId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("text", { name: "tDaddress" })
  tDaddress: string;

  @Column("mediumtext", { name: "tEndLat" })
  tEndLat: string;

  @Column("mediumtext", { name: "tEndLong" })
  tEndLong: string;

  @Column("mediumtext", { name: "tDriverLatitude" })
  tDriverLatitude: string;

  @Column("mediumtext", { name: "tDriverLongitude" })
  tDriverLongitude: string;

  @Column("enum", { name: "eUserType", enum: ["Driver", "Passenger"] })
  eUserType: "Driver" | "Passenger";

  @Column("timestamp", {
    name: "dAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddedDate: Date;
}
