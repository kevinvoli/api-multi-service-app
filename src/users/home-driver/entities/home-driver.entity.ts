import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("home_driver", { schema: "amygo1" })
export class HomeDriver {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverId" })
  iDriverId: number;

  @Column("text", { name: "vImage" })
  vImage: string;

  @Column("longtext", { name: "vName_EN" })
  vNameEn: string;

  @Column("longtext", { name: "vName_DA" })
  vNameDa: string;

  @Column("longtext", { name: "vName_FR" })
  vNameFr: string;

  @Column("longtext", { name: "vName_IW" })
  vNameIw: string;

  @Column("longtext", { name: "vName_HI" })
  vNameHi: string;

  @Column("longtext", { name: "vName_MY" })
  vNameMy: string;

  @Column("longtext", { name: "vName_FA" })
  vNameFa: string;

  @Column("longtext", { name: "vName_RU" })
  vNameRu: string;

  @Column("longtext", { name: "vName_TR" })
  vNameTr: string;

  @Column("longtext", { name: "vName_YO" })
  vNameYo: string;

  @Column("longtext", { name: "vName_KO" })
  vNameKo: string;

  @Column("longtext", { name: "vName_JA" })
  vNameJa: string;

  @Column("longtext", { name: "vName_BN" })
  vNameBn: string;

  @Column("longtext", { name: "vName_KM" })
  vNameKm: string;

  @Column("longtext", { name: "vName_TL" })
  vNameTl: string;

  @Column("longtext", { name: "vName_VI" })
  vNameVi: string;

  @Column("longtext", { name: "vName_TA" })
  vNameTa: string;

  @Column("longtext", { name: "vName_SI" })
  vNameSi: string;

  @Column("longtext", { name: "vName_MS" })
  vNameMs: string;

  @Column("longtext", { name: "vName_KU" })
  vNameKu: string;

  @Column("longtext", { name: "vName_SW" })
  vNameSw: string;

  @Column("longtext", { name: "vName_ZU" })
  vNameZu: string;

  @Column("longtext", { name: "vName_PT" })
  vNamePt: string;

  @Column("longtext", { name: "vName_ZH" })
  vNameZh: string;

  @Column("longtext", { name: "vName_AZ" })
  vNameAz: string;

  @Column("longtext", { name: "vName_UR" })
  vNameUr: string;

  @Column("longtext", { name: "vName_AR" })
  vNameAr: string;

  @Column("longtext", { name: "vName_IT" })
  vNameIt: string;

  @Column("longtext", { name: "vName_ES" })
  vNameEs: string;

  @Column("longtext", { name: "vName_DE" })
  vNameDe: string;

  @Column("longtext", { name: "vName_ID" })
  vNameId: string;

  @Column("longtext", { name: "vName_TH" })
  vNameTh: string;

  @Column("longtext", { name: "vName_AF" })
  vNameAf: string;

  @Column("longtext", { name: "vDesignation_EN" })
  vDesignationEn: string;

  @Column("longtext", { name: "vDesignation_DA" })
  vDesignationDa: string;

  @Column("longtext", { name: "vDesignation_FR" })
  vDesignationFr: string;

  @Column("longtext", { name: "vDesignation_IW" })
  vDesignationIw: string;

  @Column("longtext", { name: "vDesignation_HI" })
  vDesignationHi: string;

  @Column("longtext", { name: "vDesignation_MY" })
  vDesignationMy: string;

  @Column("longtext", { name: "vDesignation_FA" })
  vDesignationFa: string;

  @Column("longtext", { name: "vDesignation_RU" })
  vDesignationRu: string;

  @Column("longtext", { name: "vDesignation_TR" })
  vDesignationTr: string;

  @Column("longtext", { name: "vDesignation_YO" })
  vDesignationYo: string;

  @Column("longtext", { name: "vDesignation_KO" })
  vDesignationKo: string;

  @Column("longtext", { name: "vDesignation_JA" })
  vDesignationJa: string;

  @Column("longtext", { name: "vDesignation_BN" })
  vDesignationBn: string;

  @Column("longtext", { name: "vDesignation_KM" })
  vDesignationKm: string;

  @Column("longtext", { name: "vDesignation_TL" })
  vDesignationTl: string;

  @Column("longtext", { name: "vDesignation_VI" })
  vDesignationVi: string;

  @Column("longtext", { name: "vDesignation_TA" })
  vDesignationTa: string;

  @Column("longtext", { name: "vDesignation_SI" })
  vDesignationSi: string;

  @Column("longtext", { name: "vDesignation_MS" })
  vDesignationMs: string;

  @Column("longtext", { name: "vDesignation_KU" })
  vDesignationKu: string;

  @Column("longtext", { name: "vDesignation_SW" })
  vDesignationSw: string;

  @Column("longtext", { name: "vDesignation_ZU" })
  vDesignationZu: string;

  @Column("longtext", { name: "vDesignation_PT" })
  vDesignationPt: string;

  @Column("longtext", { name: "vDesignation_ZH" })
  vDesignationZh: string;

  @Column("longtext", { name: "vDesignation_AZ" })
  vDesignationAz: string;

  @Column("longtext", { name: "vDesignation_UR" })
  vDesignationUr: string;

  @Column("longtext", { name: "vDesignation_AR" })
  vDesignationAr: string;

  @Column("longtext", { name: "vDesignation_IT" })
  vDesignationIt: string;

  @Column("longtext", { name: "vDesignation_ES" })
  vDesignationEs: string;

  @Column("longtext", { name: "vDesignation_DE" })
  vDesignationDe: string;

  @Column("longtext", { name: "vDesignation_ID" })
  vDesignationId: string;

  @Column("longtext", { name: "vDesignation_TH" })
  vDesignationTh: string;

  @Column("longtext", { name: "vDesignation_AF" })
  vDesignationAf: string;

  @Column("longtext", { name: "tText_EN" })
  tTextEn: string;

  @Column("longtext", { name: "tText_DA" })
  tTextDa: string;

  @Column("longtext", { name: "tText_FR" })
  tTextFr: string;

  @Column("longtext", { name: "tText_IW" })
  tTextIw: string;

  @Column("longtext", { name: "tText_HI" })
  tTextHi: string;

  @Column("longtext", { name: "tText_MY" })
  tTextMy: string;

  @Column("longtext", { name: "tText_FA" })
  tTextFa: string;

  @Column("longtext", { name: "tText_RU" })
  tTextRu: string;

  @Column("longtext", { name: "tText_TR" })
  tTextTr: string;

  @Column("longtext", { name: "tText_YO" })
  tTextYo: string;

  @Column("longtext", { name: "tText_KO" })
  tTextKo: string;

  @Column("longtext", { name: "tText_JA" })
  tTextJa: string;

  @Column("longtext", { name: "tText_BN" })
  tTextBn: string;

  @Column("longtext", { name: "tText_KM" })
  tTextKm: string;

  @Column("longtext", { name: "tText_TL" })
  tTextTl: string;

  @Column("longtext", { name: "tText_VI" })
  tTextVi: string;

  @Column("longtext", { name: "tText_TA" })
  tTextTa: string;

  @Column("longtext", { name: "tText_SI" })
  tTextSi: string;

  @Column("longtext", { name: "tText_MS" })
  tTextMs: string;

  @Column("longtext", { name: "tText_KU" })
  tTextKu: string;

  @Column("longtext", { name: "tText_SW" })
  tTextSw: string;

  @Column("longtext", { name: "tText_ZU" })
  tTextZu: string;

  @Column("longtext", { name: "tText_PT" })
  tTextPt: string;

  @Column("longtext", { name: "tText_ZH" })
  tTextZh: string;

  @Column("longtext", { name: "tText_AZ" })
  tTextAz: string;

  @Column("longtext", { name: "tText_UR" })
  tTextUr: string;

  @Column("longtext", { name: "tText_AR" })
  tTextAr: string;

  @Column("longtext", { name: "tText_IT" })
  tTextIt: string;

  @Column("longtext", { name: "tText_ES" })
  tTextEs: string;

  @Column("longtext", { name: "tText_DE" })
  tTextDe: string;

  @Column("longtext", { name: "tText_ID" })
  tTextId: string;

  @Column("longtext", { name: "tText_TH" })
  tTextTh: string;

  @Column("longtext", { name: "tText_AF" })
  tTextAf: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;
}
