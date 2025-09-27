import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_emergency_contact", { schema: "amygo1" })
export class UserEmergencyContact {
  @PrimaryGeneratedColumn({ type: "int", name: "iEmergencyId" })
  iEmergencyId: number;

  @Column("int", {
    name: "iUserId",
    comment:
      "Linked with register_user- iUserId OR register_driver - iDriverId",
  })
  iUserId: number;

  @Column("varchar", { name: "vName", length: 100 })
  vName: string;

  @Column("varchar", { name: "vPhone", length: 100 })
  vPhone: string;

  @Column("enum", {
    name: "eUserType",
    enum: ["Passenger", "Driver"],
    default: "Passenger",
  })
  eUserType: "Passenger" | "Driver";
}
