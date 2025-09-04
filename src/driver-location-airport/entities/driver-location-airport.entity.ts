import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iLocatioId", ["iDriverAirportLocationId"], { unique: true })
@Entity("driver_location_airport", { schema: "amygo1" })
export class DriverLocationAirport {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverAirportLocationId" })
  iDriverAirportLocationId: number;

  @Column("int", { name: "iAirportLocationId" })
  iAirportLocationId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("timestamp", {
    name: "tAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tAddedDate: Date;
}
