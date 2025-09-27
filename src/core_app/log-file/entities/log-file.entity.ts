import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("log_file", { schema: "amygo1" })
export class LogFile {
  @PrimaryGeneratedColumn({ type: "int", name: "iLogId" })
  iLogId: number;

  @Column("varchar", { name: "vLogName", length: 100 })
  vLogName: string;

  @Column("datetime", { name: "tDate" })
  tDate: Date;

  @Column("int", { name: "iCompanyId", default: "0" })
  iCompanyId: number;

  @Column("int", { name: "iDriverId", default: "0" })
  iDriverId: number;

  @Column("enum", { name: "eUserType", enum: ["driver", "company"] })
  eUserType: "driver" | "company";

  @Column("enum", {
    name: "eType",
    enum: [
      "licence",
      "noc",
      "certificate",
      "insurance",
      "permit",
      "registeration",
    ],
  })
  eType:
    | "licence"
    | "noc"
    | "certificate"
    | "insurance"
    | "permit"
    | "registeration";
}
