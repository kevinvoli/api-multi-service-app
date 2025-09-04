import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("idproof_images", { schema: "amygo1" })
export class IdproofImages {
  @PrimaryGeneratedColumn({ type: "int", name: "iImageId" })
  iImageId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("text", { name: "vImage" })
  vImage: string;

  @Column("timestamp", {
    name: "tAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tAddedDate: Date;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;
}
