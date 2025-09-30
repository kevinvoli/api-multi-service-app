import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { LanguageMaster } from "../../language-master/entities/language-master.entity";
import { AppScreenMaster } from "../../../cms/app-screen-master/entities/app-screen-master.entity";

@Index("UNIQUE_LABEL", ["vCode", "vLabel"], { unique: true })
@Entity("language_label", { schema: "amygo1" })
export class LanguageLabel {
  @PrimaryGeneratedColumn({ type: "int", name: "LanguageLabelId" })
  languageLabelId: number;

  @Column("int", { name: "lPage_id" })
  lPageId: number;

  @ManyToOne(
    () => AppScreenMaster,
    (appScreenMaster) => appScreenMaster.languageLabels,
  )
  @JoinColumn({ name: "lPage_id", referencedColumnName: "lPageId" })
  appScreen: AppScreenMaster;

  @Column("varchar", { name: "vCode", length: 5 })
  vCode: string;

  @ManyToOne(
    () => LanguageMaster,
    (languageMaster) => languageMaster.languageLabels,
  )
  @JoinColumn({ name: "vCode", referencedColumnName: "vCode" })
  language: LanguageMaster;

  @Column("varchar", { name: "vLabel", length: 100 })
  vLabel: string;

  @Column("varchar", { name: "ORG_LABEL", length: 100 })
  orgLabel: string;

  @Column("int", { name: "iSheetSrNo" })
  iSheetSrNo: number;

  @Column("text", { name: "vValue" })
  vValue: string;

  @Column("varchar", { name: "vScreen", length: 100 })
  vScreen: string;

  @Column("enum", {
    name: "eScript",
    enum: ["Yes", "No"],
    default: "No",
  })
  eScript: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eDeviceType",
    enum: ["APP", "WEB"],
    default: "APP",
  })
  eDeviceType: "APP" | "WEB";

  @Column("enum", {
    name: "eAppType",
    enum: [
      "General",
      "Ride",
      "Delivery",
      "Ride-Delivery",
      "UberX",
      "Multi-Delivery",
      "DeliverAll",
      "Kiosk",
      "Food",
    ],
    default: "General",
  })
  eAppType:
    | "General"
    | "Ride"
    | "Delivery"
    | "Ride-Delivery"
    | "UberX"
    | "Multi-Delivery"
    | "DeliverAll"
    | "Kiosk"
    | "Food";

  @Column("enum", {
    name: "eFor",
    enum: [
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
      "Food",
    ],
    default: "General",
  })
  eFor:
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
    | "Fly"
    | "Food";

  @Column("enum", {
    name: "eProcessed",
    enum: ["Yes", "No"],
    default: "No",
  })
  eProcessed: "Yes" | "No";

  @Column("enum", {
    name: "eInProcess",
    enum: ["Yes", "No"],
    default: "No",
  })
  eInProcess: "Yes" | "No";
}
