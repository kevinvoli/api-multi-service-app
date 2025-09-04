import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("IDX_COUNTRIES_NAME", ["vCountry"], {})
@Index("vCountryCode", ["vCountryCode"], {})
@Entity("country", { schema: "amygo1" })
export class Country {
  @PrimaryGeneratedColumn({ type: "int", name: "iCountryId" })
  iCountryId: number;

  @Column("varchar", { name: "vCountry", length: 64, default: () => "''" })
  vCountry: string;

  @Column("text", {
    name: "tCountryNative",
    comment: "Name of country in their native language",
  })
  tCountryNative: string;

  @Column("char", { name: "vCountryCode", length: 2, default: () => "''" })
  vCountryCode: string;

  @Column("char", { name: "vCountryCodeISO_3", length: 3, default: () => "''" })
  vCountryCodeIso_3: string;

  @Column("varchar", { name: "vPhoneCode", length: 100 })
  vPhoneCode: string;

  @Column("text", { name: "tLatitude" })
  tLatitude: string;

  @Column("text", { name: "tLongitude" })
  tLongitude: string;

  @Column("mediumtext", { name: "tCapital", comment: "Capital of country" })
  tCapital: string;

  @Column("mediumtext", { name: "tContinent", comment: "Continent of country" })
  tContinent: string;

  @Column("mediumtext", {
    name: "tLanguages",
    comment: "A comma separated string. Contains language codes",
  })
  tLanguages: string;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("text", {
    name: "tTimeZones",
    comment: "Comma Separated of timezones of countries ",
  })
  tTimeZones: string;

  @Column("varchar", { name: "vAlterTimeZone", length: 100 })
  vAlterTimeZone: string;

  @Column("varchar", { name: "vEmergencycode", length: 100 })
  vEmergencycode: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eUnit",
    enum: ["KMs", "Miles"],
    default: () => "'KMs'",
  })
  eUnit: "KMs" | "Miles";

  @Column("float", { name: "fTax1", precision: 12, default: () => "'0'" })
  fTax1: number;

  @Column("float", { name: "fTax2", precision: 12, default: () => "'0'" })
  fTax2: number;

  @Column("varchar", { name: "vCurrency", length: 50 })
  vCurrency: string;

  @Column("enum", {
    name: "eEnableToll",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eEnableToll: "Yes" | "No";

  @Column("enum", {
    name: "eZeroAllowed",
    comment: "This field only for prfix in mobile number in string.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eZeroAllowed: "Yes" | "No";

  @Column("enum", {
    name: "eRoundingOffEnable",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eRoundingOffEnable: "Yes" | "No";

  @Column("float", { name: "fMiddleRangeValue", precision: 10, scale: 2 })
  fMiddleRangeValue: number;

  @Column("float", { name: "fFirstRangeValue", precision: 10, scale: 2 })
  fFirstRangeValue: number;

  @Column("float", { name: "fSecRangeValue", precision: 10, scale: 2 })
  fSecRangeValue: number;

  @Column("varchar", { name: "vRImage", length: 255 })
  vRImage: string;

  @Column("varchar", { name: "vSImage", length: 255 })
  vSImage: string;

  @Column("text", { name: "vPaymentGateway" })
  vPaymentGateway: string;

  @Column("enum", {
    name: "eEnableSinch",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eEnableSinch: "Yes" | "No";
}
