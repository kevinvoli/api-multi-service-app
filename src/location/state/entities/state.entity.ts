import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("state", { schema: "amygo1" })
export class State {
  @PrimaryGeneratedColumn({ type: "int", name: "iStateId" })
  iStateId: number;

  @Column("int", { name: "iCountryId", default: "0" })
  iCountryId: number;

  @Column("varchar", { name: "vStateCode", length: 32, default: () => "''" })
  vStateCode: string;

  @Column("varchar", { name: "vState", length: 100 })
  vState: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
