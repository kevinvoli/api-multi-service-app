import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sms_templates", { schema: "amygo1" })
export class SmsTemplates {
  @PrimaryGeneratedColumn({ type: "int", name: "iSMSId" })
  iSmsId: number;

  @Column("varchar", { name: "vSMS_Code", nullable: true, length: 500 })
  vSmsCode: string | null;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("text", { name: "vBody_DN", nullable: true })
  vBodyDn: string | null;

  @Column("text", { name: "vBody_EN", nullable: true })
  vBodyEn: string | null;

  @Column("text", { name: "vBody_DA" })
  vBodyDa: string;

  @Column("text", { name: "vBody_FR" })
  vBodyFr: string;

  @Column("text", { name: "vBody_IW" })
  vBodyIw: string;

  @Column("text", { name: "vBody_HI" })
  vBodyHi: string;

  @Column("text", { name: "vBody_MY" })
  vBodyMy: string;

  @Column("text", { name: "vBody_FA" })
  vBodyFa: string;

  @Column("text", { name: "vBody_RU" })
  vBodyRu: string;

  @Column("text", { name: "vBody_TR" })
  vBodyTr: string;

  @Column("text", { name: "vBody_YO" })
  vBodyYo: string;

  @Column("text", { name: "vBody_KO" })
  vBodyKo: string;

  @Column("text", { name: "vBody_JA" })
  vBodyJa: string;

  @Column("text", { name: "vBody_MS" })
  vBodyMs: string;

  @Column("text", { name: "vBody_KU" })
  vBodyKu: string;

  @Column("text", { name: "vBody_ZU" })
  vBodyZu: string;

  @Column("text", { name: "vBody_ID" })
  vBodyId: string;

  @Column("text", { name: "vBody_AF" })
  vBodyAf: string;

  @Column("text", { name: "vBody_EE", nullable: true })
  vBodyEe: string | null;

  @Column("text", { name: "vBody_FI", nullable: true })
  vBodyFi: string | null;

  @Column("text", { name: "vBody_FN", nullable: true })
  vBodyFn: string | null;

  @Column("text", { name: "vBody_DE", nullable: true })
  vBodyDe: string | null;

  @Column("text", { name: "vBody_LV", nullable: true })
  vBodyLv: string | null;

  @Column("text", { name: "vBody_LT", nullable: true })
  vBodyLt: string | null;

  @Column("text", { name: "vBody_NO", nullable: true })
  vBodyNo: string | null;

  @Column("text", { name: "vBody_PO", nullable: true })
  vBodyPo: string | null;

  @Column("text", { name: "vBody_RS", nullable: true })
  vBodyRs: string | null;

  @Column("text", { name: "vBody_ES", nullable: true })
  vBodyEs: string | null;

  @Column("text", { name: "vBody_SW", nullable: true })
  vBodySw: string | null;

  @Column("text", { name: "vBody_IT" })
  vBodyIt: string;

  @Column("text", { name: "vBody_AR" })
  vBodyAr: string;

  @Column("text", { name: "vBody_PS" })
  vBodyPs: string;

  @Column("text", { name: "vBody_NL" })
  vBodyNl: string;

  @Column("text", { name: "vBody_AZ" })
  vBodyAz: string;

  @Column("text", { name: "vBody_BG" })
  vBodyBg: string;

  @Column("text", { name: "vBody_ZH" })
  vBodyZh: string;

  @Column("text", { name: "vBody_HR" })
  vBodyHr: string;

  @Column("text", { name: "vBody_CS" })
  vBodyCs: string;

  @Column("text", { name: "vBody_HU" })
  vBodyHu: string;

  @Column("text", { name: "vBody_TS" })
  vBodyTs: string;

  @Column("text", { name: "vBody_HW" })
  vBodyHw: string;

  @Column("text", { name: "vBody_EL" })
  vBodyEl: string;

  @Column("text", { name: "vBody_TH" })
  vBodyTh: string;

  @Column("text", { name: "vBody_UR" })
  vBodyUr: string;

  @Column("varchar", { name: "vBody_PT", length: 255 })
  vBodyPt: string;

  @Column("text", { name: "vBody_SI" })
  vBodySi: string;

  @Column("text", { name: "vBody_TA" })
  vBodyTa: string;

  @Column("text", { name: "vBody_VI" })
  vBodyVi: string;

  @Column("text", { name: "vBody_TL" })
  vBodyTl: string;

  @Column("text", { name: "vBody_KM" })
  vBodyKm: string;

  @Column("text", { name: "vBody_BN" })
  vBodyBn: string;
}
