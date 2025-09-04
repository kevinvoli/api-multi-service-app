import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("language_master", { schema: "amygo1" })
export class LanguageMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "iLanguageMasId" })
  iLanguageMasId: number;

  @Column("varchar", { name: "vTitle", length: 50 })
  vTitle: string;

  @Column("varchar", { name: "vTitle_EN", length: 50 })
  vTitleEn: string;

  @Column("varchar", { name: "vCode", length: 5 })
  vCode: string;

  @Column("varchar", {
    name: "vGMapLangCode",
    length: 5,
    default: () => "'en'",
  })
  vGMapLangCode: string;

  @Column("varchar", { name: "vLangCode", length: 5 })
  vLangCode: string;

  @Column("varchar", { name: "vCurrencyCode", length: 100 })
  vCurrencyCode: string;

  @Column("varchar", { name: "vCurrencySymbol", length: 50 })
  vCurrencySymbol: string;

  @Column("int", { name: "iDispOrder" })
  iDispOrder: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDefault: "Yes" | "No";

  @Column("enum", {
    name: "eDirectionCode",
    enum: ["rtl", "ltr"],
    default: () => "'ltr'",
  })
  eDirectionCode: "rtl" | "ltr";
}
