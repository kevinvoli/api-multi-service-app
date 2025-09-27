import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("vStatus", ["vStatusTrack"], { unique: true })
@Entity("order_status", { schema: "amygo1" })
export class OrderStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderStatusId" })
  iOrderStatusId: number;

  @Column("varchar", {
    name: "vStatus_Track",
    unique: true,
    length: 255,
    default: "",
  })
  vStatusTrack: string;

  @Column("varchar", { name: "vStatus", length: 100 })
  vStatus: string;

  @Column("int", { name: "iStatusCode" })
  iStatusCode: number;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vStatus_EN", length: 100 })
  vStatusEn: string;

  @Column("varchar", { name: "vStatus_FR", length: 100 })
  vStatusFr: string;

  @Column("text", { name: "vStatus_Track_EN" })
  vStatusTrackEn: string;

  @Column("text", { name: "vStatus_Track_FR" })
  vStatusTrackFr: string;

  @Column("enum", { name: "eTakeaway", enum: ["", "Yes", "No"] })
  eTakeaway: "" | "Yes" | "No";

  @Column("enum", {
    name: "eBuyAnyService",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBuyAnyService: "Yes" | "No";
}
