import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("setup_info", { schema: "amygo1" })
export class SetupInfo {
  @PrimaryGeneratedColumn({ type: "int", name: "iSetupId" })
  iSetupId: number;

  @Column("varchar", { name: "vName", length: 255 })
  vName: string;

  @Column("varchar", { name: "vProjectName", length: 255 })
  vProjectName: string;

  @Column("enum", {
    name: "eProductType",
    enum: [
      "Ride",
      "Delivery",
      "Ride-Delivery",
      "UberX",
      "Ride-Delivery-UberX",
      "Ride-Delivery-UberX-Shark",
      "Foodonly",
      "Deliverall",
    ],
    default:"Ride",
  })
  eProductType:
    | "Ride"
    | "Delivery"
    | "Ride-Delivery"
    | "UberX"
    | "Ride-Delivery-UberX"
    | "Ride-Delivery-UberX-Shark"
    | "Foodonly"
    | "Deliverall";

  @Column("enum", {
    name: "eDeliveryType",
    enum: ["Single", "Multi", "NONE"],
    default: "NONE",
  })
  eDeliveryType: "Single" | "Multi" | "NONE";

  @Column("varchar", { name: "vUFX_Driver", length: 255 })
  vUfxDriver: string;

  @Column("varchar", { name: "vUFX_Rider", length: 255 })
  vUfxRider: string;

  @Column("timestamp", {
    name: "dSetupDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dSetupDate: Date;

  @Column("enum", {
    name: "eSetupInfo",
    enum: ["Yes", "No"],
    default: "No",
  })
  eSetupInfo: "Yes" | "No";

  @Column("enum", { name: "eLang", enum: ["Yes", "No"], default: "No" })
  eLang: "Yes" | "No";

  @Column("enum", {
    name: "eLablesConverted",
    comment: "if labels are converted or not",
    enum: ["Yes", "No"],
    default: "No",
  })
  eLablesConverted: "Yes" | "No";

  @Column("enum", {
    name: "eAppTypeLabelChanged",
    comment: "like if delivery then replace rider to sender",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAppTypeLabelChanged: "Yes" | "No";

  @Column("enum", {
    name: "eCurrency",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCurrency: "Yes" | "No";

  @Column("int", { name: "iCountryId", default: "0" })
  iCountryId: number;

  @Column("enum", {
    name: "eConfiguration",
    enum: ["Yes", "No"],
    default: "No",
  })
  eConfiguration: "Yes" | "No";

  @Column("enum", {
    name: "eTableTruncate",
    enum: ["Yes", "No"],
    default: "No",
  })
  eTableTruncate: "Yes" | "No";

  @Column("enum", {
    name: "eExtraImagesRemoved",
    enum: ["Yes", "No"],
   default: "No",
  })
  eExtraImagesRemoved: "Yes" | "No";

  @Column("enum", {
    name: "eLablesAdded",
    enum: ["Yes", "No"],
   default: "No",
  })
  eLablesAdded: "Yes" | "No";

  @Column("enum", {
    name: "ePackageType",
    enum: ["", "standard", "enterprise", "shark"],
    default: "standard",
  })
  ePackageType: "" | "standard" | "enterprise" | "shark";

  @Column("enum", {
    name: "eEnableKiosk",
    enum: ["Yes", "No"],
   default: "No",
  })
  eEnableKiosk: "Yes" | "No";

  @Column("enum", {
    name: "eEnableHotel",
    enum: ["Yes", "No"],
    default: "No",
  })
  eEnableHotel: "Yes" | "No";

  @Column("varchar", { name: "vAppTypeX", length: 50 })
  vAppTypeX: string;

  @Column("enum", {
    name: "eCubeX",
    enum: ["Yes", "No"],
    default:"No",
  })
  eCubeX: "Yes" | "No";

  @Column("enum", {
    name: "eCubejekX",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCubejekX: "Yes" | "No";

  @Column("enum", {
    name: "eRideX",
    enum: ["Yes", "No"],
    default: "No",
  })
  eRideX: "Yes" | "No";

  @Column("enum", {
    name: "eDeliverallX",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDeliverallX: "Yes" | "No";

  @Column("enum", {
    name: "eFoodX",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFoodX: "Yes" | "No";

  @Column("enum", {
    name: "eKingX",
    enum: ["Yes", "No"],
    default: "No",
  })
  eKingX: "Yes" | "No";

  @Column("varchar", {
    name: "vDeliverallIds",
    length: 50,
    default: "No",
  })
  vDeliverallIds: string;

  @Column("varchar", { name: "vServiceId", length: 5, default: "No",})
  vServiceId: string;

  @Column("enum", {
    name: "eConfigurationApplied",
    comment: "Yes,No",
    enum: ["Yes", "No"],
    default: "No",
  })
  eConfigurationApplied: "Yes" | "No";

  @Column("enum", {
    name: "eLanguageFieldsSetup",
    enum: ["Yes", "No"],
    default: "No",
  })
  eLanguageFieldsSetup: "Yes" | "No";

  @Column("enum", {
    name: "eCurrencyFieldsSetup",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCurrencyFieldsSetup: "Yes" | "No";

  @Column("enum", {
    name: "eLanguageLabelConversion",
    enum: ["Yes", "No"],
     default: "No",
  })
  eLanguageLabelConversion: "Yes" | "No";

  @Column("enum", {
    name: "eOtherTableValueConversion",
    enum: ["Yes", "No"],
     default: "No",
  })
  eOtherTableValueConversion: "Yes" | "No";

  @Column("longtext", { name: "lAddOnConfiguration" })
  lAddOnConfiguration: string;

  @Column("text", { name: "tProjectPortData" })
  tProjectPortData: string;

  @Column("text", { name: "tAppPackageData" })
  tAppPackageData: string;

  @Column("text", { name: "tPaymentGateways" })
  tPaymentGateways: string;
}
