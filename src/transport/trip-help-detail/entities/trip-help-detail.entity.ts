import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_help_detail", { schema: "amygo1" })
export class TripHelpDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripHelpDetailId" })
  iTripHelpDetailId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iHelpDetailId" })
  iHelpDetailId: number;

  @Column("text", { name: "vComment" })
  vComment: string;

  @Column("datetime", { name: "tDate" })
  tDate: Date;
}
