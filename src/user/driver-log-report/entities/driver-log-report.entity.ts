import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_log_report", { schema: "amygo1" })
export class DriverLogReport {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverLogId" })
  iDriverLogId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("timestamp", {
    name: "dLoginDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  dLoginDateTime: Date;

  @Column("timestamp", {
    name: "dLogoutDateTime",
    default: () => "'0000-00-00 00:00:00'",
  })
  dLogoutDateTime: Date;

  @Column("varchar", { name: "vIP", length: 255 })
  vIp: string;
}
