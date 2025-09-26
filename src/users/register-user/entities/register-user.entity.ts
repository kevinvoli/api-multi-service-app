import { Trips } from "../../../transport/trips/entities/trip.entity";
import { UserWallet } from "../../../payments/user-wallet/entities/user-wallet.entity";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";


@Index("iCompanyId", ["iCompanyId"], {})
@Entity("register_user", { schema: "amygo1" })
export class RegisterUser {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iRefUserId" })
  iRefUserId: number;

  @Column("enum", { name: "eRefType", enum: ["Driver", "Rider"] })
  eRefType: "Driver" | "Rider";

  @Column("varchar", { name: "vFbId", length: 255, default: () => "'0'" })
  vFbId: string;

  @Column("int", { name: "iHotelId" })
  iHotelId: number;

  @Column("mediumtext", { name: "vName" })
  vName: string;

  @Column("mediumtext", { name: "vLastName" })
  vLastName: string;

  @Column("mediumtext", { name: "vEmail" })
  vEmail: string;

  @Column("mediumtext", { name: "vPassword" })
  vPassword: string;

  @Column("mediumtext", { name: "vCountry" })
  vCountry: string;

  @Column("mediumtext", { name: "vState" })
  vState: string;

  @Column("mediumtext", { name: "vPhone" })
  vPhone: string;

  @Column("enum", { name: "eGender", enum: ["", "Male", "Female"] })
  eGender: "" | "Male" | "Female";

  @Column("date", { name: "dBirthDate" })
  dBirthDate: string;

  @Column("mediumtext", { name: "vImgName" })
  vImgName: string;

  @Column("varchar", { name: "vAvgRating", length: 50, default: () => "'0.0'" })
  vAvgRating: string;

  @Column("enum", {
    name: "vLogoutDev",
    enum: ["true", "false"],
    default: () => "'false'",
  })
  vLogoutDev: "true" | "false";

  @Column("mediumtext", { name: "iGcmRegId" })
  iGcmRegId: string;

  @Column("mediumtext", { name: "vCallFromDriver" })
  vCallFromDriver: string;

  @Column("int", {
    name: "iTripId",
    comment: "Link with trips",
    default: () => "'0'",
  })
  iTripId: number;

  @Column("varchar", {
    name: "vTripStatus",
    comment: "Link with trips 'iActive'",
    length: 100,
    default: () => "'NONE'",
  })
  vTripStatus: string;

  @Column("enum", {
    name: "vTripPaymentMode",
    enum: ["Cash", "Paypal", "NONE", "Card"],
    default: () => "'NONE'",
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

  @Column("mediumtext", { name: "tDestinationLatitude" })
  tDestinationLatitude: string;

  @Column("mediumtext", { name: "tDestinationLongitude" })
  tDestinationLongitude: string;

  @Column("text", { name: "tDestinationAddress" })
  tDestinationAddress: string;

  @Column("mediumtext", { name: "vInviteCode" })
  vInviteCode: string;

  @Column("mediumtext", { name: "vCouponCode" })
  vCouponCode: string;

  @Column("mediumtext", { name: "vLang" })
  vLang: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("mediumtext", { name: "vPhoneCode" })
  vPhoneCode: string;

  @Column("mediumtext", { name: "vZip" })
  vZip: string;

  @Column("mediumtext", { name: "vPassToken" })
  vPassToken: string;

  @Column("enum", {
    name: "eDeviceType",
    enum: ["Android", "Ios"],
    default: () => "'Android'",
  })
  eDeviceType: "Android" | "Ios";

  @Column("enum", {
    name: "eDebugMode",
    comment: "This applies to IOS devices only",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDebugMode: "Yes" | "No";

  @Column("mediumtext", { name: "vCurrencyPassenger" })
  vCurrencyPassenger: string;

  @Column("timestamp", {
    name: "tRegistrationDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRegistrationDate: Date;

  @Column("text", { name: "iCabBookingId" })
  iCabBookingId: string;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX"],
    default: () => "'Ride'",
  })
  eType: "Ride" | "Deliver" | "UberX";

  @Column("int", { name: "iPackageTypeId" })
  iPackageTypeId: number;

  @Column("mediumtext", { name: "vReceiverName" })
  vReceiverName: string;

  @Column("mediumtext", { name: "vReceiverMobile" })
  vReceiverMobile: string;

  @Column("mediumtext", { name: "tPickUpIns" })
  tPickUpIns: string;

  @Column("mediumtext", { name: "tDeliveryIns" })
  tDeliveryIns: string;

  @Column("mediumtext", { name: "tPackageDetails" })
  tPackageDetails: string;

  @Column("enum", {
    name: "eDeliverModule",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDeliverModule: "Yes" | "No";

  @Column("int", { name: "iUserPetId", default: () => "'0'" })
  iUserPetId: number;

  @Column("int", { name: "iAppVersion", default: () => "'1'" })
  iAppVersion: number;

  @Column("mediumtext", { name: "vRefCode" })
  vRefCode: string;

  @Column("datetime", { name: "dRefDate" })
  dRefDate: Date;

  @Column("mediumtext", { name: "vLatitude" })
  vLatitude: string;

  @Column("mediumtext", { name: "vLongitude" })
  vLongitude: string;

  @Column("timestamp", {
    name: "tLastOnline",
    default: () => "'0000-00-00 00:00:00'",
  })
  tLastOnline: Date;

  @Column("enum", {
    name: "eEmailVerified",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eEmailVerified: "Yes" | "No";

  @Column("enum", {
    name: "ePhoneVerified",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ePhoneVerified: "Yes" | "No";

  @Column("int", { name: "iQty", default: () => "'1'" })
  iQty: number;

  @Column("int", { name: "iUserVehicleId" })
  iUserVehicleId: number;

  // @Column("mediumtext", { name: "vPasswordToken" })
  // vPasswordToken: string;

  @Column("enum", {
    name: "eSignUpType",
    enum: ["Normal", "Facebook", "Twitter", "Google", "Apple"],
    default: () => "'Normal'",
  })
  eSignUpType: "Normal" | "Facebook" | "Twitter" | "Google" | "Apple";

  @Column("text", { name: "tSessionId" })
  tSessionId: string;

  @Column("mediumtext", { name: "vPassword_token" })
  vPasswordToken: string;

  @Column("mediumtext", { name: "vRideCountry" })
  vRideCountry: string;

  @Column("text", { name: "tDeviceSessionId" })
  tDeviceSessionId: string;

  @Column("enum", { name: "eHail", enum: ["Yes", "No"], default: () => "'No'" })
  eHail: "Yes" | "No";

  @Column("mediumtext", { name: "vFirebaseDeviceToken" })
  vFirebaseDeviceToken: string;

  @Column("float", { name: "fTollPrice", precision: 12, default: () => "'0'" })
  fTollPrice: number;

  @Column("mediumtext", { name: "vTollPriceCurrencyCode" })
  vTollPriceCurrencyCode: string;

  @Column("enum", {
    name: "eTollSkipped",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eTollSkipped: "Yes" | "No";

  @Column("mediumtext", { name: "vTimeZone" })
  vTimeZone: string;

  @Column("enum", {
    name: "eLogout",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eLogout: "Yes" | "No";

  @Column("enum", {
    name: "eIsBlocked",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eIsBlocked: "Yes" | "No";

  @Column("timestamp", {
    name: "tBlockeddate",
    default: () => "'0000-00-00 00:00:00'",
  })
  tBlockeddate: Date;

  @Column("datetime", { name: "tLocationUpdateDate" })
  tLocationUpdateDate: Date;

  @Column("enum", {
    name: "eIs_Kiosk",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eIsKiosk: "Yes" | "No";

  @Column("enum", {
    name: "eChangeLang",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eChangeLang: "Yes" | "No";

  @Column("int", { name: "vVerificationCount", default: () => "'0'" })
  vVerificationCount: number;

  @Column("datetime", { name: "dSendverificationDate" })
  dSendverificationDate: Date;

  @Column("float", {
    name: "fTripsOutStandingAmount",
    precision: 12,
    default: () => "'0'",
  })
  fTripsOutStandingAmount: number;

  @Column("int", { name: "vVerificationCountEmergency", default: () => "'0'" })
  vVerificationCountEmergency: number;

  @Column("datetime", { name: "dSendverificationDateEmergency" })
  dSendverificationDateEmergency: Date;

  @Column("enum", {
    name: "eOutstandingAdjustment",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eOutstandingAdjustment: "Yes" | "No";

  @Column("enum", {
    name: "eTestUser",
    comment: "This is not used",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eTestUser: "Yes" | "No";

  @Column("mediumtext", { name: "vEmailVarificationCode" })
  vEmailVarificationCode: string;

  @Column("enum", {
    name: "eReviewModeLogin",
    comment: "This apply to IOS app only",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eReviewModeLogin: "Yes" | "No";

  @Column("int", { name: "iAdvertBannerId", default: () => "'0'" })
  iAdvertBannerId: number;

  @Column("timestamp", {
    name: "tSeenAdvertiseTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tSeenAdvertiseTime: Date;

  @Column("mediumtext", {
    name: "tApiFileName",
    comment: "Field is for name of api file",
  })
  tApiFileName: string;

  @Column("mediumtext", {
    name: "tVersion",
    comment: "Field is for version name of application",
  })
  tVersion: string;

  @Column("mediumtext", { name: "tDeviceData" })
  tDeviceData: string;

  @Column("mediumtext", {
    name: "vRecipientEmail",
    comment: "Its used for kiosk receipt",
  })
  vRecipientEmail: string;

  @Column("enum", {
    name: "eAllowFakeGPS",
    comment:
      "This is just for development purpose. In reality, this field's value must be set to 'No'. If you want to allow fake GPS for particular user then set this field's value to 'Yes'.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAllowFakeGps: "Yes" | "No";

  @Column("enum", {
    name: "eAppTerminate",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAppTerminate: "Yes" | "No";

  @Column("varchar", { name: "vAppleId", length: 255, default: () => "'0'" })
  vAppleId: string;

  @Column("varchar", { name: "vTaskStatus", length: 50 })
  vTaskStatus: string;

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("int", { name: "iOTP" })
  iOtp: number;

  @Column("enum", { name: "eHmsDevice", enum: ["No", "Yes"] })
  eHmsDevice: "No" | "Yes";

  @Column("tinyint", {
    name: "isCommando",
    nullable: true,
    comment: "Champ Ajout",
    width: 1,
    default: () => "'0'",
  })
  isCommando: boolean | null;

  @OneToMany(() => Trips, (trips) => trips.iUser)
  trips: Trips[];

  @OneToMany(() => UserWallet, (userWallet) => userWallet.iUser)
  userWallets: UserWallet[];
}
