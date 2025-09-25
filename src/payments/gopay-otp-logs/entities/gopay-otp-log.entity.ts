import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("gopay_otp_logs", { schema: "amygo1" })
export class GopayOtpLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "iOtplogId" })
  iOtplogId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("enum", { name: "eUserType", enum: ["Driver", "Rider"] })
  eUserType: "Driver" | "Rider";

  @Column("int", { name: "fromUserId" })
  fromUserId: number;

  @Column("enum", { name: "fromUserType", enum: ["Driver", "Rider"] })
  fromUserType: "Driver" | "Rider";

  @Column("datetime", { name: "datetime" })
  datetime: Date;
}
