import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("member_login_session_log", { schema: "amygo1" })
export class MemberLoginSessionLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iSessionLogId" })
  iSessionLogId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("enum", {
    name: "eUserType",
    enum: ["Passenger", "Driver", "Company"],
  })
  eUserType: "Passenger" | "Driver" | "Company";

  @Column("text", { name: "tSessionId" })
  tSessionId: string;

  @Column("enum", { name: "eDeviceType", enum: ["Android", "Ios"] })
  eDeviceType: "Android" | "Ios";

  @Column("text", { name: "iGcmRegId" })
  iGcmRegId: string;

  @Column("longtext", { name: "tDeviceData" })
  tDeviceData: string;
}
