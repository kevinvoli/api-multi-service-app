import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("backup_database", { schema: "amygo1" })
export class BackupDatabase {
  @PrimaryGeneratedColumn({ type: "int", name: "iBackupId" })
  iBackupId: number;

  @Column("varchar", { name: "vFile", length: 255 })
  vFile: string;

  @Column("enum", {
    name: "eType",
    enum: ["Manual", "Auto"],
    default: () => "'Auto'",
  })
  eType: "Manual" | "Auto";

  @Column("datetime", { name: "dDate" })
  dDate: Date;
}
