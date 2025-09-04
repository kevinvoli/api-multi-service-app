import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("master_service_category", { schema: "amygo1" })
export class MasterServiceCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "iMasterServiceCategoryId" })
  iMasterServiceCategoryId: number;

  @Column("text", { name: "vCategoryName" })
  vCategoryName: string;

  @Column("enum", {
    name: "eType",
    enum: [
      "Ride",
      "Deliver",
      "UberX",
      "VideoConsult",
      "Bidding",
      "MedicalServices",
    ],
  })
  eType:
    | "Ride"
    | "Deliver"
    | "UberX"
    | "VideoConsult"
    | "Bidding"
    | "MedicalServices";

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive", "Deleted"] })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("text", { name: "vIconImage" })
  vIconImage: string;

  @Column("text", { name: "vIconImage1" })
  vIconImage1: string;

  @Column("text", { name: "vIconImage2" })
  vIconImage2: string;

  @Column("text", { name: "vBgImage" })
  vBgImage: string;

  @Column("varchar", { name: "vTextColor", length: 10 })
  vTextColor: string;

  @Column("varchar", { name: "vBgColor", length: 10 })
  vBgColor: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("int", { name: "iListMaxCount" })
  iListMaxCount: number;
}
