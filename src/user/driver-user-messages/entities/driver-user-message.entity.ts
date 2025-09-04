import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_user_messages", { schema: "amygo1" })
export class DriverUserMessages {
  @PrimaryGeneratedColumn({ type: "int", name: "iMessageId" })
  iMessageId: number;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("text", { name: "tSendertype" })
  tSendertype: string;

  @Column("int", { name: "iTripId", comment: "Link with trips" })
  iTripId: number;

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;
}
