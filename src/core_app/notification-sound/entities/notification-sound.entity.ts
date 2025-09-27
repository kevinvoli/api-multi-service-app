import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("notification_sound", { schema: "amygo1" })
export class NotificationSound {
  @PrimaryGeneratedColumn({ type: "int", name: "iSoundId" })
  iSoundId: number;

  @Column("varchar", { name: "vFileName", length: 255 })
  vFileName: string;

  @Column("enum", {
    name: "eSoundFor",
    enum: ["User", "Provider", "Dial", "Store", "Voip"],
    default: "User",
  })
  eSoundFor: "User" | "Provider" | "Dial" | "Store" | "Voip";

  @Column("enum", {
    name: "eAdminDisplay",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eAdminDisplay: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eIsSelected",
    enum: ["Yes", "No"],
    default: "No",
  })
  eIsSelected: "Yes" | "No";

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDefault: "Yes" | "No";
}
