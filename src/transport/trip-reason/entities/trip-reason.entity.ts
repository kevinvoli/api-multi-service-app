import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
