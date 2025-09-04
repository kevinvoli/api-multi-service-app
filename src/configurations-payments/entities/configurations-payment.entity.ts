import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("vName", ["vName"], { unique: true })
@Entity("configurations_payment", { schema: "amygo1" })
export class ConfigurationsPayment {
  @PrimaryGeneratedColumn({ type: "int", name: "iSettingId" })
  iSettingId: number;

  @Column("mediumtext", { name: "tDescription" })
  tDescription: string;

  @Column("varchar", { name: "vName", unique: true, length: 255 })
  vName: string;

  @Column("text", { name: "vValue" })
  vValue: string;

  @Column("int", { name: "vOrder" })
  vOrder: number;

  @Column("enum", {
    name: "eFor",
    enum: [
      "",
      "General",
      "Ride",
      "Delivery",
      "Ride",
      "Delivery",
      "UberX",
      "Ride",
      "Delivery",
      "UberX",
      "Ride-Delivery-UberX",
      "Multi-Delivery",
      "DeliverAll",
      "Kiosk",
      "Fly",
    ],
    default: () => "''",
  })
  eFor:
    | ""
    | "General"
    | "Ride"
    | "Delivery"
    | "Ride,Delivery"
    | "UberX"
    | "Ride,Delivery,UberX"
    | "Ride-Delivery-UberX"
    | "Multi-Delivery"
    | "DeliverAll"
    | "Kiosk"
    | "Fly";

  @Column("enum", {
    name: "eType",
    enum: [
      "General",
      "Email",
      "Apperance",
      "Prices",
      "Paypal",
      "Meta",
      "SMS",
      "Payment",
      "Social Media",
      "App Settings",
      "Installation Settings",
      "Store Settings",
    ],
    default: () => "'General'",
  })
  eType:
    | "General"
    | "Email"
    | "Apperance"
    | "Prices"
    | "Paypal"
    | "Meta"
    | "SMS"
    | "Payment"
    | "Social Media"
    | "App Settings"
    | "Installation Settings"
    | "Store Settings";

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("mediumtext", { name: "tHelp" })
  tHelp: string;

  @Column("enum", {
    name: "eInputType",
    enum: ["Text", "Textarea", "Select", "Number", "NumericRange", "Checkbox"],
    default: () => "'Text'",
  })
  eInputType:
    | "Text"
    | "Textarea"
    | "Select"
    | "Number"
    | "NumericRange"
    | "Checkbox";

  @Column("enum", {
    name: "eZeroAllowed",
    comment: "This will take effect when eInputType is 'Number'",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eZeroAllowed: "Yes" | "No";

  @Column("enum", {
    name: "eSpaceAllowed",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eSpaceAllowed: "Yes" | "No";

  @Column("enum", {
    name: "eDoubleValueAllowed",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDoubleValueAllowed: "Yes" | "No";

  @Column("mediumtext", { name: "tSelectVal" })
  tSelectVal: string;

  @Column("enum", {
    name: "eAdminDisplay",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eAdminDisplay: "Yes" | "No";

  @Column("enum", {
    name: "eRequireField",
    comment: "Use For Setup Interface Only",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eRequireField: "Yes" | "No";

  @Column("enum", {
    name: "eConfigRequired",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eConfigRequired: "Yes" | "No";

  @Column("enum", {
    name: "eSensitive",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eSensitive: "Yes" | "No";

  @Column("enum", {
    name: "ePaymentMethodConfig",
    enum: ["No", "Yes"],
    default: () => "'No'",
  })
  ePaymentMethodConfig: "No" | "Yes";
}
