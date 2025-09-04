import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_messages", { schema: "amygo1" })
export class TripMessages {
  @PrimaryGeneratedColumn({ type: "int", name: "iMessageId" })
  iMessageId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("int", { name: "iThreadId" })
  iThreadId: number;

  @Column("int", { name: "iFromMemberId" })
  iFromMemberId: number;

  @Column("int", { name: "iToMemberId" })
  iToMemberId: number;

  @Column("varchar", { name: "vSubject", length: 500 })
  vSubject: string;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("enum", { name: "eStatus", enum: ["Read", "Unread"] })
  eStatus: "Read" | "Unread";

  @Column("enum", { name: "eUserType", enum: ["Passenger", "Driver"] })
  eUserType: "Passenger" | "Driver";
}
