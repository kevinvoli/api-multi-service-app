import { CabRequestNow } from "../../../transport/cab-request-now/entities/cab-request-now.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_profile", { schema: "amygo1" })
export class UserProfile {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserProfileId" })
  iUserProfileId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iUserProfileMasterId" })
  iUserProfileMasterId: number;

  @Column("int", { name: "iOrganizationId" })
  iOrganizationId: number;

  @Column("varchar", { name: "vProfileEmail", length: 500 })
  vProfileEmail: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Pending", "Active", "Inactive", "Deleted", "Terminate", "Reject"],
    default: "Pending",
  })
  eStatus:
    | "Pending"
    | "Active"
    | "Inactive"
    | "Deleted"
    | "Terminate"
    | "Reject";

  @OneToMany(() => CabRequestNow, (cabRequestNow) => cabRequestNow.userProfile)
  cabRequestNows: CabRequestNow[];

  @OneToMany(() => Trips, (trip) => trip.userProfile)
  trips: Trips[];
}
