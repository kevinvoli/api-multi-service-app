import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("currency", { schema: "amygo1" })
export class Currency {
  @PrimaryGeneratedColumn({ type: "int", name: "iCurrencyId" })
  iCurrencyId: number;

  @Column("varchar", { name: "vName", length: 10 })
  vName: string;

  @Column("varchar", { name: "vSymbol", length: 20 })
  vSymbol: string;

  @Column("int", { name: "iDispOrder" })
  iDispOrder: number;

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDefault: "Yes" | "No";

  @Column("double", {
    name: "Ratio",
    precision: 10,
    scale: 4,
    default: () => "'0.0000'",
  })
  ratio: number;

  @Column("double", {
    name: "fThresholdAmount",
    comment: "Admin will enter min currency value for driver to be request",
    precision: 10,
    scale: 4,
    default: () => "'0.0000'",
  })
  fThresholdAmount: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eReverseformattingEnable",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReverseformattingEnable: "Yes" | "No";

  @Column("enum", {
    name: "eReverseSymbolEnable",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReverseSymbolEnable: "Yes" | "No";

  @Column("enum", {
    name: "eRoundingOffEnable",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eRoundingOffEnable: "Yes" | "No";

  @Column("float", {
    name: "fFirstRangeValue",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fFirstRangeValue: number;

  @Column("float", {
    name: "fMiddleRangeValue",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMiddleRangeValue: number;

  @Column("float", {
    name: "fSecRangeValue",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fSecRangeValue: number;
}
