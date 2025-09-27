import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("document_master", { schema: "amygo1" })
export class DocumentMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "doc_masterid" })
  docMasterid: number;

  @Column("enum", {
    name: "doc_usertype",
    enum: ["company", "driver", "car", "store"],
  })
  docUsertype: "company" | "driver" | "car" | "store";

  @Column("varchar", { name: "doc_name", length: 50 })
  docName: string;

  @Column("varchar", { name: "country", length: 10 })
  country: string;

  @Column("enum", { name: "ex_status", enum: ["yes", "no"] })
  exStatus: "yes" | "no";

  @Column("enum", {
    name: "status",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  status: "Active" | "Inactive" | "Deleted";

  @Column("timestamp", {
    name: "doc_instime",
    default: () => "CURRENT_TIMESTAMP",
  })
  docInstime: Date;

  @Column("varchar", { name: "doc_name_EN", length: 50 })
  docNameEn: string;

  @Column("varchar", { name: "doc_name_FR", length: 50 })
  docNameFr: string;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Delivery", "UberX"],
    default: "Ride",
  })
  eType: "Ride" | "Delivery" | "UberX";

  @Column("enum", {
    name: "eDocServiceType",
    enum: ["General", "ServiceSpecific", "BiddingSpecific"],
    default: "General",
  })
  eDocServiceType: "General" | "ServiceSpecific" | "BiddingSpecific";

  @Column("int", { name: "iVehicleCategoryId", default: "0" })
  iVehicleCategoryId: number;

  @Column("int", { name: "iDisplayOrder", default: () => "'1'" })
  iDisplayOrder: number;

  @Column("int", { name: "iBiddingId" })
  iBiddingId: number;
}
