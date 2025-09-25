import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("voice_direction_files", { schema: "amygo1" })
export class VoiceDirectionFiles {
  @PrimaryGeneratedColumn({ type: "int", name: "iVoiceDirectionFileId" })
  iVoiceDirectionFileId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("text", { name: "vFile" })
  vFile: string;

  @Column("timestamp", {
    name: "tAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tAddedDate: Date;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;
}
