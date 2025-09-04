import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("passenger_requests", { schema: "amygo1" })
export class PassengerRequests {
  @PrimaryGeneratedColumn({ type: "int", name: "iRequestId" })
  iRequestId: number;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("text", { name: "iMsgCode" })
  iMsgCode: string;

  @Column("timestamp", {
    name: "dAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddedDate: Date;
}
