import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_status_logs", { schema: "amygo1" })
export class UserStatusLogs {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserLogId" })
  iUserLogId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("enum", {
    name: "eUserType",
    enum: ["company", "driver", "car", "store"],
  })
  eUserType: "company" | "driver" | "car" | "store";

  @Column("date", { name: "dDate", nullable: true })
  dDate: string | null;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive", "Deleted"] })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iUpdatedBy" })
  iUpdatedBy: number;

  @Column("varchar", { name: "vIP", nullable: true, length: 100 })
  vIp: string | null;
}
