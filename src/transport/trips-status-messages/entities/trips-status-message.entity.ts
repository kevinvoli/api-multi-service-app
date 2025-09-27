import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_status_messages", { schema: "amygo1" })
export class TripStatusMessages {
  @PrimaryGeneratedColumn({ type: "int", name: "iStatusId" })
  iStatusId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("enum", {
    name: "eFromUserType",
    enum: ["Driver", "Passenger", ""],
    default: "",
  })
  eFromUserType: "Driver" | "Passenger" | "";

  @Column("enum", {
    name: "eToUserType",
    enum: ["Driver", "Passenger", ""],
    default: "",
  })
  eToUserType: "Driver" | "Passenger" | "";

  @Column("enum", {
    name: "eReceived",
    enum: ["Yes", "No"],
    default: "No",
  })
  eReceived: "Yes" | "No";

  @Column("timestamp", {
    name: "dAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddedDate: Date;
}
