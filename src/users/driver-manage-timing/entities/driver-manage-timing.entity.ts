import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_manage_timing", { schema: "amygo1" })
export class DriverManageTiming {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverTimingId" })
  iDriverTimingId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("varchar", { name: "vDay", length: 200 })
  vDay: string;

  @Column("text", { name: "vAvailableTimes" })
  vAvailableTimes: string;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";
}
