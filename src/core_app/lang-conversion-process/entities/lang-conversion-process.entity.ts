import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQUE_TABLE", ["vTableName"], { unique: true })
@Entity("lang_conversion_process", { schema: "amygo1" })
export class LangConversionProcess {
  @PrimaryGeneratedColumn({ type: "int", name: "iProcessId" })
  iProcessId: number;

  @Column("varchar", { name: "vTableName", unique: true, length: 255 })
  vTableName: string;

  @Column("int", { name: "iRecord" })
  iRecord: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Pending", "In Progress", "Done"],
    default: () => "'Pending'",
  })
  eStatus: "Pending" | "In Progress" | "Done";

  @Column("timestamp", {
    name: "tStartDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tStartDateTime: Date;

  @Column("timestamp", {
    name: "tEndDateTime",
    default: () => "'0000-00-00 00:00:00'",
  })
  tEndDateTime: Date;
}
