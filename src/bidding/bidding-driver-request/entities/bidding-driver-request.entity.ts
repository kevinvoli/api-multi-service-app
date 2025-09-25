import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bidding_driver_request", { schema: "amygo1" })
export class BiddingDriverRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "iRequestId" })
  iRequestId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("enum", {
    name: "eRequestStatus",
    enum: ["Pending", "Approve", "Cancel"],
    default: () => "'Pending'",
  })
  eRequestStatus: "Pending" | "Approve" | "Cancel";

  @Column("timestamp", {
    name: "tRequestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRequestDate: Date;

  @Column("int", { name: "iBiddingId" })
  iBiddingId: number;
}
