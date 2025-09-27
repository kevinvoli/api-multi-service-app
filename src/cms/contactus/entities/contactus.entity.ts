import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("contactus", { schema: "amygo1" })
export class Contactus {
  @PrimaryGeneratedColumn({ type: "int", name: "iContactusId" })
  iContactusId: number;

  @Column("int", { name: "iMemberId" })
  iMemberId: number;

  @Column("varchar", { name: "vFirstname", length: 100 })
  vFirstname: string;

  @Column("varchar", { name: "vLastname", length: 100 })
  vLastname: string;

  @Column("enum", {
    name: "eUserType",
    enum: ["Passenger", "Driver", "Company", "Guest"],
    default: "Guest",
  })
  eUserType: "Passenger" | "Driver" | "Company" | "Guest";

  @Column("enum", { name: "eSystem", enum: ["General", "DeliverAll"] })
  eSystem: "General" | "DeliverAll";

  @Column("mediumtext", { name: "vEmail" })
  vEmail: string;

  @Column("mediumtext", { name: "vPhone" })
  vPhone: string;

  @Column("mediumtext", { name: "vSubject" })
  vSubject: string;

  @Column("text", { name: "tDescription" })
  tDescription: string;

  @Column("timestamp", {
    name: "tRequestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRequestDate: Date;
}
