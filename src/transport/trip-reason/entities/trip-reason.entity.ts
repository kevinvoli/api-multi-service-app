import { CabBooking } from "../cab-booking/entities/cab-booking.entity";
import { CabRequestNow } from "../cab-request-now/entities/cab-request-now.entity";
import { Trips } from "../trips/entities/trip.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_reason", { schema: "amygo1" })
export class TripReason {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripReasonId" })
  iTripReasonId: number;

  @Column("int", { name: "iUserProfileMasterId" })
  iUserProfileMasterId: number;

  @Column("longtext", { name: "vReasonTitle" })
  vReasonTitle: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @OneToMany(() => CabBooking, (cabBooking) => cabBooking.tripReason)
  cabBookings: CabBooking[];

  @OneToMany(() => CabRequestNow, (cabRequestNow) => cabRequestNow.tripReason)
  cabRequestNows: CabRequestNow[];

  @OneToMany(() => Trips, (trip) => trip.tripReason)
  trips: Trips[];
}
