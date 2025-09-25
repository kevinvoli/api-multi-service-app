import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("ratings_user_driver", { schema: "amygo1" })
export class RatingsUserDriver {
  @PrimaryGeneratedColumn({ type: "int", name: "iRatingId" })
  iRatingId: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("varchar", { name: "vRating1", length: 100 })
  vRating1: string;

  @Column("timestamp", { name: "tDate", default: () => "CURRENT_TIMESTAMP" })
  tDate: Date;

  @Column("enum", {
    name: "eUserType",
    nullable: true,
    enum: ["Driver", "Passenger"],
    default: () => "'Passenger'",
  })
  eUserType: "Driver" | "Passenger" | null;

  @Column("varchar", { name: "vMessage", length: 2500 })
  vMessage: string;

  @Column("enum", {
    name: "eFromUserType",
    enum: ["Driver", "Passenger", "Company"],
    default: () => "'Passenger'",
  })
  eFromUserType: "Driver" | "Passenger" | "Company";

  @Column("enum", {
    name: "eToUserType",
    enum: ["Driver", "Passenger", "Company"],
    default: () => "'Company'",
  })
  eToUserType: "Driver" | "Passenger" | "Company";

  @Column("varchar", { name: "vSafetyRating", length: 100 })
  vSafetyRating: string;

  @Column("text", { name: "tDriverFeedbackDetails" })
  tDriverFeedbackDetails: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Deleted";
}
