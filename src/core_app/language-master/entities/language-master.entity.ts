import { LanguageLabel } from "../../language-label/entities/language-label.entity";
import { LanguageLabelOther } from "../../language-label-other/entities/language-label-other.entity";
import { LanguageLabel_1 } from "../../language-label_1/entities/language-label_1.entity";
import { LanguageLabel_2 } from "../../language-label_2/entities/language-label_2.entity";
import { LanguageLabel_5 } from "../../language-label_5/entities/language-label_5.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    default: "en",
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
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eDefault",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDefault: "Yes" | "No";

  @Column("enum", {
    name: "eDirectionCode",
    enum: ["rtl", "ltr"],
    default: "ltr",
  })
  eDirectionCode: "rtl" | "ltr";

  @OneToMany(() => LanguageLabel, (languageLabel) => languageLabel.language)
  languageLabels: LanguageLabel[];

  @OneToMany(
    () => LanguageLabelOther,
    (languageLabelOther) => languageLabelOther.language,
  )
  languageLabelOthers: LanguageLabelOther[];

  @OneToMany(() => LanguageLabel_1, (languageLabel) => languageLabel.language)
  languageLabels1: LanguageLabel_1[];

  @OneToMany(() => LanguageLabel_2, (languageLabel) => languageLabel.language)
  languageLabels2: LanguageLabel_2[];

  @OneToMany(() => LanguageLabel_5, (languageLabel) => languageLabel.language)
  languageLabels5: LanguageLabel_5[];
}
