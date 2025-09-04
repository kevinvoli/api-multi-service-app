import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("helps", { schema: "amygo1" })
export class Helps {
  @PrimaryGeneratedColumn({ type: "int", name: "iHelpsId" })
  iHelpsId: number;

  @Column("int", { name: "iHelpscategoryId" })
  iHelpscategoryId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("text", { name: "vTitle" })
  vTitle: string;

  @Column("text", { name: "tDescription" })
  tDescription: string;
}
