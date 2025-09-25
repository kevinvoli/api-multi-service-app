import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_bidding_request", { schema: "amygo1" })
export class DriverBiddingRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "iRequestId" })
  iRequestId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Pending", "Accepted", "Reoffer", "Decline", "Closed"],
    default: () => "'Pending'",
  })
  eStatus: "Pending" | "Accepted" | "Reoffer" | "Decline" | "Closed";

  @Column("datetime", { name: "iRequestDate" })
  iRequestDate: Date;

  @Column("timestamp", {
    name: "dLUpdateDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dLUpdateDate: Date;

  @Column("enum", {
    name: "DeclineByUser",
    enum: ["Passenger", "Driver"],
    default: () => "'Passenger'",
  })
  declineByUser: "Passenger" | "Driver";

  @Column("int", { name: "iCancelReasonId" })
  iCancelReasonId: number;

  @Column("longtext", { name: "vCancelReason" })
  vCancelReason: string;
}
