import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_alerts", { schema: "amygo1" })
export class AdminAlerts {
  @PrimaryGeneratedColumn({ type: "int", name: "iAlertId" })
  iAlertId: number;

  @Column("text", { name: "tAlertText" })
  tAlertText: string;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("datetime", { name: "dDate" })
  dDate: Date;

  @Column("enum", { name: "eStatus", enum: ["Read", "Unread"] })
  eStatus: "Read" | "Unread";
}