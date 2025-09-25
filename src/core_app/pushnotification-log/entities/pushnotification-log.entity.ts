import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pushnotification_log", { schema: "amygo1" })
export class PushnotificationLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iPushnotificationId" })
  iPushnotificationId: number;

  @Column("enum", { name: "eUserType", enum: ["driver", "rider", "company"] })
  eUserType: "driver" | "rider" | "company";

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("datetime", { name: "dDateTime" })
  dDateTime: Date;

  @Column("varchar", { name: "IP_ADDRESS", length: 225 })
  ipAddress: string;
}
