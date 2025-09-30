import { CabBooking } from "../../../../transport/cab-booking/entities/cab-booking.entity";
import { CabRequestNow } from "../../../../transport/cab-request-now/entities/cab-request-now.entity";
import { Trips } from "../../../../transport/trips/entities/trip.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("organization", { schema: "amygo1" })
export class Organization {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrganizationId" })
  iOrganizationId: number;

  @Column("int", { name: "iUserProfileMasterId" })
  iUserProfileMasterId: number;

  @Column("varchar", { name: "vLoginId", length: 100 })
  vLoginId: string;

  @Column("varchar", { name: "vPassword", length: 100 })
  vPassword: string;

  @Column("varchar", { name: "vImage", length: 1000 })
  vImage: string;

  @Column("varchar", { name: "vCoverImage", length: 1000 })
  vCoverImage: string;

  @Column("varchar", { name: "vCompany", length: 255 })
  vCompany: string;

  @Column("varchar", { name: "vCaddress", length: 255 })
  vCaddress: string;

  @Column("varchar", { name: "vCity", length: 255 })
  vCity: string;

  @Column("varchar", { name: "vState", length: 255 })
  vState: string;

  @Column("varchar", { name: "vZip", length: 255 })
  vZip: string;

  @Column("varchar", { name: "vInviteCode", length: 255 })
  vInviteCode: string;

  @Column("date", { name: "dBirthDate" })
  dBirthDate: string;

  @Column("varchar", { name: "vBackCheck", length: 255 })
  vBackCheck: string;

  @Column("varchar", { name: "vEmail", length: 1000 })
  vEmail: string;

  @Column("varchar", { name: "vPhone", length: 11 })
  vPhone: string;

  @Column("enum", {
    name: "eStatus",
    comment: "Deleted will comes when admin want to delete company",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("varchar", { name: "vLang", length: 10 })
  vLang: string;

  @Column("varchar", { name: "vCurrency", length: 255 })
  vCurrency: string;

  @Column("varchar", { name: "vCountry", length: 200 })
  vCountry: string;

  @Column("varchar", { name: "vCode", length: 10 })
  vCode: string;

  @Column("varchar", { name: "vLocation", length: 500 })
  vLocation: string;

  @Column("varchar", { name: "vLocationLat", length: 255 })
  vLocationLat: string;

  @Column("varchar", { name: "vLocationLong", length: 255 })
  vLocationLong: string;

  @Column("enum", {
    name: "eAccess",
    enum: ["Deaf", "None"],
    default: "None",
  })
  eAccess: "Deaf" | "None";

  @Column("varchar", { name: "vNoc", length: 200 })
  vNoc: string;

  @Column("varchar", { name: "vCerti", length: 200 })
  vCerti: string;

  @Column("timestamp", {
    name: "tRegistrationDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRegistrationDate: Date;

  // @Column("varchar", { name: "vPasswordToken", length: 255 })
  // vPasswordToken: string;

  @Column("varchar", { name: "vPassword_token", length: 255 })
  vPasswordToken: string;

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

  @Column("int", { name: "vRadius" })
  vRadius: number;

  @Column("varchar", { name: "vPaymentEmail", length: 500 })
  vPaymentEmail: string;

  @Column("varchar", { name: "vAcctHolderName", length: 500 })
  vAcctHolderName: string;

  @Column("varchar", { name: "vAcctNo", length: 500 })
  vAcctNo: string;

  @Column("varchar", { name: "vBankName", length: 500 })
  vBankName: string;

  @Column("varchar", { name: "vBankLocation", length: 500 })
  vBankLocation: string;

  @Column("varchar", { name: "vSwiftCode", length: 500 })
  vSwiftCode: string;

  @Column("varchar", { name: "vAvgRating", length: 100 })
  vAvgRating: string;

  @Column("text", { name: "iGcmRegId" })
  iGcmRegId: string;

  @Column("enum", {
    name: "eDeviceType",
    enum: ["Android", "Ios"],
    default: "Android",
  })
  eDeviceType: "Android" | "Ios";

  @Column("enum", {
    name: "eSignUpType",
    enum: ["Normal", "Facebook", "Twitter", "Google"],
    default: "Normal",
  })
  eSignUpType: "Normal" | "Facebook" | "Twitter" | "Google";

  @Column("text", { name: "vFirebaseDeviceToken" })
  vFirebaseDeviceToken: string;

  @Column("varchar", { name: "vTimeZone", length: 500 })
  vTimeZone: string;

  @Column("mediumtext", { name: "tSessionId" })
  tSessionId: string;

  @Column("mediumtext", { name: "tDeviceSessionId" })
  tDeviceSessionId: string;

  @Column("int", { name: "iAppVersion" })
  iAppVersion: number;

  @Column("enum", {
    name: "eLogout",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eLogout: "Yes" | "No";

  @Column("enum", {
    name: "eChangeLang",
    enum: ["Yes", "No"],
    default: "No",
  })
  eChangeLang: "Yes" | "No";

  @Column("enum", {
    name: "eDemoDisplay",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDemoDisplay: "Yes" | "No";

  @Column("enum", { name: "eLock", enum: ["Yes", "No"], default: "No" })
  eLock: "Yes" | "No";

  @Column("int", { name: "vVerificationCount", default: "0" })
  vVerificationCount: number;

  @Column("datetime", { name: "dSendverificationDate" })
  dSendverificationDate: Date;

  @Column("varchar", { name: "vEmailVarificationCode", length: 500 })
  vEmailVarificationCode: string;

  @Column("enum", {
    name: "ePaymentBy",
    enum: ["Passenger", "Organization"],
    default: "Passenger",
  })
  ePaymentBy: "Passenger" | "Organization";

  @OneToMany(() => CabBooking, (cabBooking) => cabBooking.organization)
  cabBookings: CabBooking[];

  @OneToMany(() => CabRequestNow, (cabRequestNow) => cabRequestNow.organization)
  cabRequestNows: CabRequestNow[];

  @OneToMany(() => Trips, (trip) => trip.organization)
  trips: Trips[];
}
