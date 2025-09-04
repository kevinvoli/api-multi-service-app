import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("visit_address", { schema: "amygo1" })
export class VisitAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "iVisitId" })
  iVisitId: number;

  @Column("varchar", { name: "vSourceLatitude", length: 255 })
  vSourceLatitude: string;

  @Column("varchar", { name: "vSourceLongitude", length: 255 })
  vSourceLongitude: string;

  @Column("varchar", { name: "vDestLatitude", length: 255 })
  vDestLatitude: string;

  @Column("varchar", { name: "vDestLongitude", length: 255 })
  vDestLongitude: string;

  @Column("text", { name: "vSourceAddresss" })
  vSourceAddresss: string;

  @Column("text", { name: "tDestAddress" })
  tDestAddress: string;

  @Column("text", { name: "tDestLocationName" })
  tDestLocationName: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("int", { name: "iHotelId" })
  iHotelId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
