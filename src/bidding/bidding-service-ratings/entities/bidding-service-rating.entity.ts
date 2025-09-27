import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bidding_service_ratings", { schema: "amygo1" })
export class BiddingServiceRatings {
  @PrimaryGeneratedColumn({ type: "int", name: "iRatingId" })
  iRatingId: number;

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("decimal", { name: "fRating", precision: 10, scale: 1 })
  fRating: string;

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;

  @Column("enum", {
    name: "eUserType",
    enum: ["Driver", "Passenger"],
    default: "Passenger",
  })
  eUserType: "Driver" | "Passenger";

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("enum", { name: "eFromUserType", enum: ["Driver", "Passenger"] })
  eFromUserType: "Driver" | "Passenger";

  @Column("enum", { name: "eToUserType", enum: ["Driver", "Passenger"] })
  eToUserType: "Driver" | "Passenger";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Deleted";
}
