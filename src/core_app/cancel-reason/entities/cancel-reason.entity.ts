import { CabBooking } from "../../../transport/cab-booking/entities/cab-booking.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
import { BiddingPost } from "../../../bidding/bidding-post/entities/bidding-post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("cancel_reason", { schema: "amygo1" })
export class CancelReason {
  @PrimaryGeneratedColumn({ type: "int", name: "iCancelReasonId" })
  iCancelReasonId: number;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("int", { name: "iSortId" })
  iSortId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eAllowedCharge",
    comment: "allow passenger to charge extra money as per vehicle_type",
    enum: ["Yes", "No"],
    default:  "No",
  })
  eAllowedCharge: "Yes" | "No";

  @Column("text", { name: "vTitle_EN" })
  vTitleEn: string;

  @Column("text", { name: "vTitle_FR" })
  vTitleFr: string;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "DeliverAll", "Bidding"],
    default: "DeliverAll",
  })
  eType: "Ride" | "Deliver" | "UberX" | "DeliverAll" | "Bidding";

  @Column("enum", {
    name: "eFor",
    enum: ["General", "Passenger", "Driver", "Company"],
    default: "General",
  })
  eFor: "General" | "Passenger" | "Driver" | "Company";

  @Column("enum", { name: "eFly", enum: ["1", "0"], default:"0" })
  eFly: "1" | "0";

  @OneToMany(() => CabBooking, (cabBooking) => cabBooking.cancelReason)
  cabBookings: CabBooking[];

  @OneToMany(() => Trips, (trip) => trip.cancelReason)
  trips: Trips[];

  @OneToMany(() => BiddingPost, (biddingPost) => biddingPost.cancelReason)
  biddingPosts: BiddingPost[];
}
