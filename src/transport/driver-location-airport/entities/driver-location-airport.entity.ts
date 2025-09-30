import { AirportLocationMaster } from "../../../location/airport-location-masters/entities/airport-location-master.entity";
import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("iLocatioId", ["iDriverAirportLocationId"], { unique: true })
@Entity("driver_location_airport", { schema: "amygo1" })
export class DriverLocationAirport {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverAirportLocationId" })
  iDriverAirportLocationId: number;

  @Column("int", { name: "iAirportLocationId" })
  iAirportLocationId: number;

  @ManyToOne(
    () => AirportLocationMaster,
    (location) => location.driverLocationAirports,
  )
  @JoinColumn({
    name: "iAirportLocationId",
    referencedColumnName: "iAirportLocationId",
  })
  airportLocation: AirportLocationMaster;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverLocationAirports)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("timestamp", {
    name: "tAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tAddedDate: Date;
}
