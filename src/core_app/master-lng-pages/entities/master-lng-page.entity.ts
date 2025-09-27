import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("master_lng_pages", { schema: "amygo1" })
export class MasterLngPages {
  @PrimaryGeneratedColumn({ type: "int", name: "iPageId" })
  iPageId: number;

  @Column("varchar", { name: "vTitle", length: 100 })
  vTitle: string;

  @Column("varchar", { name: "tFileName", length: 100 })
  tFileName: string;

  @Column("varchar", { name: "tFilePath", length: 255 })
  tFilePath: string;

  @Column("varchar", { name: "vImage", nullable: true, length: 100 })
  vImage: string | null;

  @Column("enum", { name: "ePlatformType", enum: ["Web", "App"] })
  ePlatformType: "Web" | "App";

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
    | "Fly";

  @Column("timestamp", {
    name: "dAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddedDate: Date;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("longtext", { name: "lFilePath" })
  lFilePath: string;
}
