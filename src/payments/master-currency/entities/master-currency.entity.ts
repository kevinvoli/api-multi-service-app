import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("master_currency", { schema: "amygo1" })
export class MasterCurrency {
  @PrimaryGeneratedColumn({ type: "int", name: "iCurrencyId" })
  iCurrencyId: number;

  @Column("varchar", { name: "vName", length: 10 })
  vName: string;

  @Column("varchar", { name: "vSymbol", length: 20 })
  vSymbol: string;

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDefault: "Yes" | "No";

  @Column("double", { name: "Ratio", precision: 10, scale: 4 })
  ratio: number;
}
