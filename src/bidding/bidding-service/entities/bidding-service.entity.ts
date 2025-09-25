import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bidding_service", { schema: "amygo1" })
export class BiddingService {
  @PrimaryGeneratedColumn({ type: "int", name: "iBiddingId" })
  iBiddingId: number;

  @Column("varchar", { name: "vImage", length: 255 })
  vImage: string;

  @Column("text", { name: "vImage1" })
  vImage1: string;

  @Column("text", { name: "vTitle" })
  vTitle: string;

  @Column("text", { name: "tDescription" })
  tDescription: string;

  @Column("int", { name: "iParentId" })
  iParentId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eOther",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eOther: "Yes" | "No";

  @Column("decimal", { name: "fCommission", precision: 10, scale: 2 })
  fCommission: string;
}
