import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";

@Entity("driver_manage_timing", { schema: "amygo1" })
export class DriverManageTiming {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverTimingId" })
  iDriverTimingId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverManageTimings)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

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
