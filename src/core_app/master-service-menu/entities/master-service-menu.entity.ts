import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("master_service_menu", { schema: "amygo1" })
export class MasterServiceMenu {
  @PrimaryGeneratedColumn({ type: "int", name: "iServiceMenuId" })
  iServiceMenuId: number;

  @Column("text", { name: "vTitle" })
  vTitle: string;

  @Column("int", { name: "iParentId" })
  iParentId: number;

  @Column("enum", {
    name: "eType",
    enum: [
      "Ride",
      "Deliver",
      "DeliverAll",
      "UberX",
      "Bidding",
      "VideoConsult",
      "MedicalServices",
    ],
  })
  eType:
    | "Ride"
    | "Deliver"
    | "DeliverAll"
    | "UberX"
    | "Bidding"
    | "VideoConsult"
    | "MedicalServices";

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive", "Deleted"] })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;
}
