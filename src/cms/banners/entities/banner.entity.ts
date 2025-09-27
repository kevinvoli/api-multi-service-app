import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banners", { schema: "amygo1" })
export class Banners {
  @PrimaryGeneratedColumn({ type: "int", name: "iBannerId" })
  iBannerId: number;

  @Column("int", { name: "iServiceId", default: "0" })
  iServiceId: number;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vTitle", length: 100 })
  vTitle: string;

  @Column("varchar", { name: "vImage", length: 100 })
  vImage: string;

  @Column("varchar", { name: "vCode", length: 100 })
  vCode: string;

  @Column("int", { name: "iUniqueId" })
  iUniqueId: number;

  @Column("enum", { name: "eBuyAnyService", enum: ["", "Genie", "Runner"] })
  eBuyAnyService: "" | "Genie" | "Runner";

  @Column("varchar", {
    name: "iLocationid",
    length: 255,
    default: "-1",
  })
  iLocationid: string;

  @Column("varchar", { name: "vStatusBarColor", length: 10 })
  vStatusBarColor: string;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "DeliverAll", ""],
  })
  eType: "Ride" | "Deliver" | "UberX" | "DeliverAll" | "";

  @Column("enum", {
    name: "eFor",
    enum: ["General", "AppHomeScreen", "Promotion"],
    default: "General",
  })
  eFor: "General" | "AppHomeScreen" | "Promotion";

  @Column("int", { name: "iVehicleCategoryId" })
  iVehicleCategoryId: number;
}
