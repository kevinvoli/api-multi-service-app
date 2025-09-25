import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("emergency_contact_data", { schema: "amygo1" })
export class EmergencyContactData {
  @PrimaryGeneratedColumn({ type: "int", name: "iEmergencyContactId" })
  iEmergencyContactId: number;

  @Column("varchar", { name: "vFromUserType", length: 100 })
  vFromUserType: string;

  @Column("int", {
    name: "iEmergencyId",
    comment: "link with the user_emergency_contact table",
  })
  iEmergencyId: number;

  @Column("varchar", { name: "vContactName", length: 100 })
  vContactName: string;

  @Column("varchar", { name: "vContactPhone", length: 100 })
  vContactPhone: string;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("text", { name: "tMessage" })
  tMessage: string;

  @Column("timestamp", {
    name: "tRequestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRequestDate: Date;
}
