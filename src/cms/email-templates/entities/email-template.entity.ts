import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("email_templates", { schema: "amygo1" })
export class EmailTemplates {
  @PrimaryGeneratedColumn({ type: "int", name: "iEmailId" })
  iEmailId: number;

  @Column("longtext", { name: "vEmail_Code" })
  vEmailCode: string;

  @Column("longtext", { name: "vPurpose" })
  vPurpose: string;

  @Column("enum", { name: "eMIME", nullable: true, enum: ["html", "text"] })
  eMime: "html" | "text" | null;

  @Column("enum", {
    name: "vSection",
    nullable: true,
    enum: ["Job Seeker", "Artist", "Franchisee", "Employer"],
  })
  vSection: "Job Seeker" | "Artist" | "Franchisee" | "Employer" | null;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("text", { name: "vSubject_EN", nullable: true })
  vSubjectEn: string | null;

  @Column("text", { name: "vSubject_FR" })
  vSubjectFr: string;

  @Column("longtext", { name: "vBody_EN" })
  vBodyEn: string;

  @Column("longtext", { name: "vBody_FR" })
  vBodyFr: string;

  @Column("enum", {
    name: "eSystem",
    enum: ["General", "DeliverAll"],
    default: "General",
  })
  eSystem: "General" | "DeliverAll";

  @Column("enum", {
    name: "eFor",
    enum: [
      "General",
      "Ride",
      "Delivery",
      "Ride",
      "Delivery",
      "UberX",
      "food",
      "DeliverAll",
      "Ride",
      "Delivery",
      "UberX",
    ],
    default: "General",
  })
  eFor:
    | "General"
    | "Ride"
    | "Delivery"
    | "Ride,Delivery"
    | "UberX"
    | "food"
    | "DeliverAll"
    | "Ride,Delivery,UberX";
}
