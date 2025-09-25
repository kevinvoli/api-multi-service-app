import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("delivery_fields", { schema: "amygo1" })
export class DeliveryFields {
  @PrimaryGeneratedColumn({ type: "int", name: "iDeliveryFieldId" })
  iDeliveryFieldId: number;

  @Column("varchar", { name: "vFieldName", length: 255 })
  vFieldName: string;

  @Column("text", { name: "vFieldName_EN" })
  vFieldNameEn: string;

  @Column("text", { name: "vFieldName_FR" })
  vFieldNameFr: string;

  @Column("int", { name: "iOrder" })
  iOrder: number;

  @Column("enum", {
    name: "eInputType",
    enum: ["Text", "Textarea", "Select", "Number"],
    default: () => "'Text'",
  })
  eInputType: "Text" | "Textarea" | "Select" | "Number";

  @Column("text", { name: "tDesc" })
  tDesc: string;

  @Column("enum", {
    name: "eAllowFloat",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAllowFloat: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eRequired",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eRequired: "Yes" | "No";

  @Column("enum", {
    name: "eEditable",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eEditable: "Yes" | "No";
}
