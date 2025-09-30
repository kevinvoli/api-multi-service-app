import { CabRequestNow } from "../../../transport/cab-request-now/entities/cab-request-now.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
import { HotelBanners } from "../../../cms/hotel-banners/entities/hotel-banner.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("hotel", { schema: "amygo1" })
export class Hotel {
  @PrimaryGeneratedColumn({ type: "int", name: "iHotelId" })
  iHotelId: number;

  @Column("int", { name: "iAdminId" })
  iAdminId: number;

  @Column("varchar", { name: "vFbId", length: 100, default: "0" })
  vFbId: string;

  @Column("varchar", { name: "vCreditCard", length: 255 })
  vCreditCard: string;

  @Column("varchar", { name: "vImgName", length: 255 })
  vImgName: string;

  @Column("varchar", { name: "vVehicleTypeImg", length: 500 })
  vVehicleTypeImg: string;

  @Column("varchar", { name: "vPickupFrom", length: 500 })
  vPickupFrom: string;

  @Column("varchar", {
    name: "vAvgRating",
    length: 100,
    default: () => "'0.0'",
  })
  vAvgRating: string;

  @Column("enum", {
    name: "vLogoutDev",
    enum: ["true", "false"],
    default: "false",
  })
  vLogoutDev: "true" | "false";

  @Column("mediumtext", { name: "iGcmRegId" })
  iGcmRegId: string;

  @Column("int", {
    name: "iTripId",
    comment: "Link with trips",
    default: "0",
  })
  iTripId: number;

  @Column("varchar", {
    name: "vTripStatus",
    comment: "Link with trips 'iActive'",
    length: 25,
    default: "None",
  })
  vTripStatus: string;

  @Column("enum", {
    name: "vTripPaymentMode",
    enum: ["Cash", "Paypal", "NONE", "Card"],
    default: "None",
  })
  vTripPaymentMode: "Cash" | "Paypal" | "NONE" | "Card";

  @Column("int", { name: "iSelectedCarType" })
  iSelectedCarType: number;

  @Column("float", {
    name: "fPickUpPrice",
    precision: 12,
    default: () => "'1'",
  })
  fPickUpPrice: number;

  @Column("float", { name: "fNightPrice", precision: 12, default: () => "'1'" })
  fNightPrice: number;

  @Column("varchar", { name: "vLang", length: 10 })
  vLang: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("varchar", { name: "vZip", length: 255 })
  vZip: string;

  @Column("varchar", { name: "vPassToken", length: 255 })
  vPassToken: string;

  @Column("enum", {
    name: "eDeviceType",
    enum: ["Android", "Ios"],
    default: "Android",
  })
  eDeviceType: "Android" | "Ios";

  @Column("enum", {
    name: "eDebugMode",
    comment: "This applies to IOS devices only",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDebugMode: "Yes" | "No";

  @Column("varchar", { name: "vCurrencyPassenger", length: 300 })
  vCurrencyPassenger: string;

  @Column("timestamp", {
    name: "tRegistrationDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRegistrationDate: Date;

  @Column("int", { name: "iAppVersion", default: () => "'1'" })
  iAppVersion: number;

  @Column("timestamp", {
    name: "tLastOnline",
    nullable:true,
  })
  tLastOnline: Date;

  @Column("enum", {
    name: "eEmailVerified",
    enum: ["Yes", "No"],
    default: "No",
  })
  eEmailVerified: "Yes" | "No";

  @Column("enum", {
    name: "ePhoneVerified",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePhoneVerified: "Yes" | "No";

  // @Column("varchar", { name: "vPasswordToken", length: 255 })
  // vPasswordToken: string;

  @Column("enum", {
    name: "eSignUpType",
    enum: ["Normal", "Facebook", "Twitter", "Google"],
    default: "Normal",
  })
  eSignUpType: "Normal" | "Facebook" | "Twitter" | "Google";

  @Column("text", { name: "tSessionId" })
  tSessionId: string;

  @Column("varchar", { name: "vPassword_token", length: 255 })
  vPasswordToken: string;

  @Column("text", { name: "tDeviceSessionId" })
  tDeviceSessionId: string;

  @Column("mediumtext", { name: "vFirebaseDeviceToken" })
  vFirebaseDeviceToken: string;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("enum", {
    name: "eLogout",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eLogout: "Yes" | "No";

  @Column("datetime", { name: "tLocationUpdateDate" })
  tLocationUpdateDate: Date;

  @Column("enum", {
    name: "eIs_Kiosk",
    enum: ["Yes", "No"],
    default: "No",
  })
  eIsKiosk: "Yes" | "No";

  @Column("enum", {
    name: "eChangeLang",
    enum: ["Yes", "No"],
    default: "No",
  })
  eChangeLang: "Yes" | "No";

  @Column("int", { name: "vVerificationCount", default: "0" })
  vVerificationCount: number;

  @Column("datetime", { name: "dSendverificationDate" })
  dSendverificationDate: Date;

  @Column("varchar", { name: "vEmailVarificationCode", length: 500 })
  vEmailVarificationCode: string;

  @Column("enum", {
    name: "eReviewModeLogin",
    comment: "This apply to IOS app only",
    enum: ["Yes", "No"],
    default: "No",
  })
  eReviewModeLogin: "Yes" | "No";

  @Column("enum", {
    name: "eAppTerminate",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAppTerminate: "Yes" | "No";

  @OneToMany(() => CabRequestNow, (cabRequestNow) => cabRequestNow.hotel)
  cabRequestNows: CabRequestNow[];

  @OneToMany(() => Trips, (trip) => trip.hotel)
  trips: Trips[];

  @OneToMany(() => HotelBanners, (hotelBanner) => hotelBanner.hotel)
  hotelBanners: HotelBanners[];
}
