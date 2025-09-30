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
@Entity("language_label_5", { schema: "amygo1" })
export class LanguageLabel_5 {
  @PrimaryGeneratedColumn({ type: "int", name: "LanguageLabelId" })
  languageLabelId: number;

  @Column("int", { name: "lPage_id" })
  lPageId: number;

  @ManyToOne(
    () => AppScreenMaster,
    (appScreenMaster) => appScreenMaster.languageLabels5,
  )
  @JoinColumn({ name: "lPage_id", referencedColumnName: "lPageId" })
  appScreen: AppScreenMaster;

  @Column("varchar", { name: "vCode", length: 5 })
  vCode: string;

  @ManyToOne(
    () => LanguageMaster,
    (languageMaster) => languageMaster.languageLabels5,
  )
  @JoinColumn({ name: "vCode", referencedColumnName: "vCode" })
  language: LanguageMaster;

  @Column("varchar", { name: "vLabel", length: 100 })
  vLabel: string;

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
    default:"Active",
  })
  eStatus: "Active" | "Inactive";

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
    ],
    default:"General",
  })
  eAppType:
    | "General"
    | "Ride"
    | "Delivery"
    | "Ride-Delivery"
    | "UberX"
    | "Multi-Delivery"
    | "DeliverAll"
    | "Kiosk";

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

  @Column("enum", {
    name: "eDeviceType",
    enum: ["APP", "WEB"],
    default:"APP",
  })
  eDeviceType: "APP" | "WEB";

  @Column("longtext", { name: "ORG_LABEL" })
  orgLabel: string;

  @Column("int", { name: "iSheetSrNo" })
  iSheetSrNo: number;

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
}
