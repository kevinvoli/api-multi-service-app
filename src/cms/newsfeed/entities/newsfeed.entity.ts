import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("newsletter", { schema: "amygo1" })
export class Newsletter {
  @PrimaryGeneratedColumn({ type: "int", name: "iNewsLetterId" })
  iNewsLetterId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Subscribe", "Unsubscribe"],
    default: () => "'Subscribe'",
  })
  eStatus: "Subscribe" | "Unsubscribe";

  @Column("varchar", { name: "vName", length: 255 })
  vName: string;

  @Column("varchar", { name: "vEmail", length: 255 })
  vEmail: string;

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;

  @Column("varchar", { name: "vIP", length: 30 })
  vIp: string;
}
