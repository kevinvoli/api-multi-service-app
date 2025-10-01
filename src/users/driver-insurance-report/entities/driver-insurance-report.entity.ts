import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";

@Entity("driver_insurance_report", { schema: "amygo1" })
export class DriverInsuranceReport {
  @PrimaryGeneratedColumn({ type: "int", name: "iInsuranceReportId" })
  iInsuranceReportId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverInsuranceReports)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("int", { name: "iTripId", default: "0" })
  iTripId: number;

  @ManyToOne(() => Trips, (trip) => trip.driverInsuranceReports)
  @JoinColumn({ name: "iTripId", referencedColumnName: "iTripId" })
  trip: Trips;

  @Column("datetime", { name: "dStartDate" })
  dStartDate: Date;

  @Column("datetime", { name: "dEndDate" })
  dEndDate: Date;

  @Column("text", { name: "tStartLat" })
  tStartLat: string;

  @Column("text", { name: "tStartLong" })
  tStartLong: string;

  @Column("text", { name: "tStartLocation" })
  tStartLocation: string;

  @Column("text", { name: "tEndLat" })
  tEndLat: string;

  @Column("text", { name: "tEndLong" })
  tEndLong: string;

  @Column("text", { name: "tEndLocation" })
  tEndLocation: string;

  @Column("enum", {
    name: "eAddedFor",
    comment:
      "Available:driver online to Accept,Accept:Accept to start trip,Trip:Start to end trip",
    enum: ["Available", "Accept", "Trip"],
    default: "Available",
  })
  eAddedFor: "Available" | "Accept" | "Trip";

  @Column("varchar", {
    name: "vDistance",
    comment: "will be in Kms",
    length: 255,
  })
  vDistance: string;
}
