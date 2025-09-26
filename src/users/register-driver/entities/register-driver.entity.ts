import { Company } from "../../company/entities/company.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";


@Index("iCompanyId", ["iCompanyId"], {})
@Index("iCompanyId_2", ["iCompanyId"], {})
@Entity("register_driver", { schema: "amygo1" })
export class RegisterDriver {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "business_type", nullable: true })
  businessType: number | null;

  @Column("int", { name: "iRefUserId" })
  iRefUserId: number;

  @Column("enum", { name: "eRefType", enum: ["Driver", "Rider"] })
  eRefType: "Driver" | "Rider";

  @Column("varchar", { name: "vFbId", length: 255, default: () => "'0'" })
  vFbId: string;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("mediumtext", { name: "vName" })
  vName: string;

  @Column("mediumtext", { name: "vLastName" })
  vLastName: string;

  @Column("mediumtext", { name: "vEmail" })
  vEmail: string;

  @Column("mediumtext", { name: "vLoginId" })
  vLoginId: string;

  @Column("mediumtext", { name: "vPassword" })
  vPassword: string;

  @Column("enum", { name: "eGender", enum: ["", "Male", "Female"] })
  eGender: "" | "Male" | "Female";

  @Column("mediumtext", { name: "vCode" })
  vCode: string;

  @Column("mediumtext", { name: "vPhone" })
  vPhone: string;

  @Column("mediumtext", { name: "vLang" })
  vLang: string;

  @Column("mediumtext", { name: "vLatitude" })
  vLatitude: string;

  @Column("mediumtext", { name: "vLongitude" })
  vLongitude: string;

  @Column("mediumtext", { name: "iDriverVehicleId" })
  iDriverVehicleId: string;

  @Column("mediumtext", { name: "vCompany" })
  vCompany: string;

  @Column("mediumtext", { name: "vCaddress" })
  vCaddress: string;

  @Column("mediumtext", { name: "vCadress2" })
  vCadress2: string;

  @Column("mediumtext", { name: "vCity" })
  vCity: string;

  @Column("mediumtext", { name: "vState" })
  vState: string;

  @Column("mediumtext", { name: "vZip" })
  vZip: string;

  @Column("mediumtext", { name: "vInviteCode" })
  vInviteCode: string;

  @Column("date", { name: "dBirthDate" })
  dBirthDate: string;

  @Column("mediumtext", { name: "vFathersName" })
  vFathersName: string;

  @Column("mediumtext", { name: "vBackCheck" })
  vBackCheck: string;

  @Column("mediumtext", { name: "vServiceLoc" })
  vServiceLoc: string;

  @Column("mediumtext", { name: "vAvailability" })
  vAvailability: string;

  @Column("mediumtext", { name: "vCarType" })
  vCarType: string;

  @Column("varchar", { name: "vAvgRating", length: 50, default: () => "'0.0'" })
  vAvgRating: string;

  @Column("mediumtext", { name: "iGcmRegId" })
  iGcmRegId: string;

  @Column("mediumtext", { name: "vImage" })
  vImage: string;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("varchar", {
    name: "vTripStatus",
    length: 100,
    default: () => "'NONE'",
  })
  vTripStatus: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["active", "inactive", "Deleted", "Suspend"],
    default: () => "'inactive'",
  })
  eStatus: "active" | "inactive" | "Deleted" | "Suspend";

  @Column("mediumtext", { name: "vVat" })
  vVat: string;

  @Column("enum", {
    name: "eAccess",
    enum: ["Deaf", "None"],
    default: () => "'None'",
  })
  eAccess: "Deaf" | "None";

  @Column("mediumtext", { name: "vCountry" })
  vCountry: string;

  @Column("timestamp", {
    name: "tLastOnline",
    default: () => "'0000-00-00 00:00:00'",
  })
  tLastOnline: Date;

  @Column("timestamp", {
    name: "tOnline",
    default: () => "'0000-00-00 00:00:00'",
  })
  tOnline: Date;

  @Column("datetime", {
    name: "tSwitchOnline",
    comment: "Time when driver press online switch and becomes online",
  })
  tSwitchOnline: Date;

  @Column("mediumtext", { name: "vLicence" })
  vLicence: string;

  @Column("mediumtext", { name: "vNoc" })
  vNoc: string;

  @Column("mediumtext", { name: "vCerti" })
  vCerti: string;

  @Column("date", { name: "dLicenceExp" })
  dLicenceExp: string;

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

  @Column("mediumtext", { name: "vCurrencyDriver" })
  vCurrencyDriver: string;

  @Column("timestamp", {
    name: "tRegistrationDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRegistrationDate: Date;

  @Column("enum", {
    name: "eSentNotification",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eSentNotification: "Yes" | "No";

  @Column("date", { name: "dSentNotification" })
  dSentNotification: string;

  @Column("enum", {
    name: "eDeliverModule",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDeliverModule: "Yes" | "No";

  @Column("int", { name: "iAppVersion", default: () => "'1'" })
  iAppVersion: number;

  @Column("mediumtext", { name: "vRefCode" })
  vRefCode: string;

  @Column("datetime", { name: "dRefDate" })
  dRefDate: Date;

  @Column("mediumtext", { name: "vPaymentEmail" })
  vPaymentEmail: string;

  @Column("mediumtext", { name: "vBankAccountHolderName" })
  vBankAccountHolderName: string;

  @Column("mediumtext", { name: "vAccountNumber" })
  vAccountNumber: string;

  @Column("mediumtext", { name: "vBankLocation" })
  vBankLocation: string;

  @Column("mediumtext", { name: "vBankName" })
  vBankName: string;

  @Column("mediumtext", { name: "vBIC_SWIFT_Code" })
  vBicSwiftCode: string;

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

  @Column("text", { name: "tProfileDescription" })
  tProfileDescription: string;

  // @Column("mediumtext", { name: "vPasswordToken" })
  // vPasswordToken: string;

  @Column("enum", {
    name: "eSignUpType",
    enum: ["Normal", "Facebook", "Twitter", "Google", "LinkedIn", "Apple"],
    default: () => "'Normal'",
  })
  eSignUpType:
    | "Normal"
    | "Facebook"
    | "Twitter"
    | "Google"
    | "LinkedIn"
    | "Apple";

  @Column("text", { name: "tSessionId" })
  tSessionId: string;

  @Column("mediumtext", { name: "vPassword_token" })
  vPasswordToken: string;

  @Column("mediumtext", { name: "vRideCountry" })
  vRideCountry: string;

  @Column("text", { name: "tDeviceSessionId" })
  tDeviceSessionId: string;

  @Column("enum", {
    name: "eFemaleOnlyReqAccept",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eFemaleOnlyReqAccept: "Yes" | "No";

  @Column("mediumtext", { name: "vFirebaseDeviceToken" })
  vFirebaseDeviceToken: string;

  @Column("enum", {
    name: "eLogout",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eLogout: "Yes" | "No";

  @Column("mediumtext", { name: "vTimeZone" })
  vTimeZone: string;

  @Column("datetime", { name: "tLocationUpdateDate" })
  tLocationUpdateDate: Date;

  @Column("mediumtext", { name: "vWorkLocation" })
  vWorkLocation: string;

  @Column("mediumtext", { name: "vWorkLocationLatitude" })
  vWorkLocationLatitude: string;

  @Column("mediumtext", { name: "vWorkLocationLongitude" })
  vWorkLocationLongitude: string;

  @Column("mediumtext", { name: "vWorkLocationRadius" })
  vWorkLocationRadius: string;

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

  @Column("enum", {
    name: "eSelectWorkLocation",
    enum: ["Dynamic", "Fixed"],
    default: () => "'Dynamic'",
  })
  eSelectWorkLocation: "Dynamic" | "Fixed";

  @Column("int", { name: "vVerificationCountEmergency", default: () => "'0'" })
  vVerificationCountEmergency: number;

  @Column("datetime", { name: "dSendverificationDateEmergency" })
  dSendverificationDateEmergency: Date;

  @Column("enum", {
    name: "eIsFeatured",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eIsFeatured: "Yes" | "No";

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
    name: "eEnableDemoLocDispatch",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eEnableDemoLocDispatch: "Yes" | "No";

  @Column("enum", {
    name: "eAllowFakeGPS",
    comment:
      "This is just for development purpose. In reality, this field's value must be set to 'No'. If you want to allow fake GPS for particular user then set this field's value to 'Yes'.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAllowFakeGps: "Yes" | "No";

  @Column("int", { name: "iAdvertBannerId", default: () => "'0'" })
  iAdvertBannerId: number;

  @Column("timestamp", {
    name: "tSeenAdvertiseTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tSeenAdvertiseTime: Date;

  @Column("mediumtext", { name: "vPoolDestLat" })
  vPoolDestLat: string;

  @Column("mediumtext", { name: "vPoolDestLang" })
  vPoolDestLang: string;

  @Column("enum", {
    name: "eEnableServiceAtLocation",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eEnableServiceAtLocation: "Yes" | "No";

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

  @Column("enum", {
    name: "eDestinationMode",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDestinationMode: "Yes" | "No";

  @Column("int", { name: "iDestinationCount" })
  iDestinationCount: number;

  @Column("datetime", {
    name: "tDestinationModifiedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tDestinationModifiedDate: Date;

  @Column("int", { name: "vTollVerificationCount" })
  vTollVerificationCount: number;

  @Column("datetime", { name: "dTollSendverificationDate" })
  dTollSendverificationDate: Date;

  @Column("varchar", { name: "vAvgSafetyRating", length: 50 })
  vAvgSafetyRating: string;

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

  @Column("int", { name: "iTrackServiceTripId" })
  iTrackServiceTripId: number;

  @Column("int", { name: "iTrackServiceCompanyId" })
  iTrackServiceCompanyId: number;

  @ManyToOne(() => Company, (company) => company.registerDrivers, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "iCompanyId", referencedColumnName: "iCompanyId" }])
  iCompany: Company;

  @OneToMany(() => Trips, (trips) => trips.iDriver)
  trips: Trips[];
}
