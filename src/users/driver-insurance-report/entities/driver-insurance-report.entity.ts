import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_insurance_report", { schema: "amygo1" })
export class DriverInsuranceReport {
  @PrimaryGeneratedColumn({ type: "int", name: "iInsuranceReportId" })
  iInsuranceReportId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iTripId", default: "0" })
  iTripId: number;

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
    default: () => "'Available'",
  })
  eAddedFor: "Available" | "Accept" | "Trip";

  @Column("varchar", {
    name: "vDistance",
    comment: "will be in Kms",
    length: 255,
  })
  vDistance: string;
}
