import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("configurations_payment_log", { schema: "amygo1" })
export class ConfigurationsPaymentLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iLogId" })
  iLogId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("timestamp", {
    name: "tChangedDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tChangedDateTime: Date;

  @Column("varchar", { name: "vIP", length: 50 })
  vIp: string;

  @Column("longtext", { name: "lPayConfigData" })
  lPayConfigData: string;
}
