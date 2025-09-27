import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("delivery_preferences", { schema: "amygo1" })
export class DeliveryPreferences {
  @PrimaryGeneratedColumn({ type: "int", name: "iPreferenceId" })
  iPreferenceId: number;

  @Column("text", { name: "tTitle" })
  tTitle: string;

  @Column("text", { name: "tDescription" })
  tDescription: string;

  @Column("enum", {
    name: "ePreferenceFor",
    enum: ["Store", "Provider"],
    default: () => "'Store'",
  })
  ePreferenceFor: "Store" | "Provider";

  @Column("enum", {
    name: "eImageUpload",
    enum: ["Yes", "No"],
    default: "No",
  })
  eImageUpload: "Yes" | "No";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eContactLess",
    enum: ["Yes", "No"],
    default: "No",
  })
  eContactLess: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "is_deleted", default: "0" })
  isDeleted: number;
}
