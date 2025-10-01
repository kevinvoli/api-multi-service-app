import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";

@Entity("driver_log_report", { schema: "amygo1" })
export class DriverLogReport {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverLogId" })
  iDriverLogId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverLogReports)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("timestamp", {
    name: "dLoginDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  dLoginDateTime: Date;

  @Column("timestamp", {
    name: "dLogoutDateTime",
    nullable:true,
  })
  dLogoutDateTime: Date;

  @Column("varchar", { name: "vIP", length: 255 })
  vIp: string;
}
