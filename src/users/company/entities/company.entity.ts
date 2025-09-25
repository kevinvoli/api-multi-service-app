import { RegisterDriver } from "src/register-driver/entities/register-driver.entity";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("iServiceId", ["iServiceId"], {})
@Index("eStatus", ["eStatus"], {})
@Index("iCompanyId", ["iCompanyId"], {})
@Entity("company", { schema: "amygo1" })
export class Company {
  @PrimaryGeneratedColumn({ type: "int", name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @Column("varchar", { name: "vContactName", length: 100 })
  vContactName: string;

  @Column("varchar", { name: "vName", length: 100 })
  vName: string;

  @Column("varchar", { name: "vLastName", length: 100 })
  vLastName: string;

  @Column("varchar", { name: "vLoginId", length: 100 })
  vLoginId: string;

  @Column("varchar", { name: "vPassword", length: 100 })
  vPassword: string;

  @Column("varchar", { name: "vImage", length: 100 })
  vImage: string;

  @Column("varchar", { name: "vCoverImage", length: 100 })
  vCoverImage: string;

  @Column("varchar", { name: "vCompany", length: 100 })
  vCompany: string;

  @Column("text", { name: "vCaddress" })
  vCaddress: string;

  @Column("varchar", { name: "vCadress2", length: 255 })
  vCadress2: string;

  @Column("varchar", { name: "vCity", length: 100 })
  vCity: string;

  @Column("varchar", { name: "vState", length: 100 })
  vState: string;

  @Column("varchar", { name: "vZip", length: 50 })
  vZip: string;

  @Column("varchar", { name: "vInviteCode", length: 50 })
  vInviteCode: string;

  @Column("date", { name: "dBirthDate" })
  dBirthDate: string;

  @Column("varchar", { name: "vFathersName", length: 100 })
  vFathersName: string;

  @Column("varchar", { name: "vBackCheck", length: 255 })
  vBackCheck: string;

  @Column("varchar", { name: "vDriverImg", length: 100 })
  vDriverImg: string;

  @Column("varchar", { name: "vEmail", length: 100 })
  vEmail: string;

  @Column("varchar", { name: "vPhone", length: 20 })
  vPhone: string;

  @Column("enum", {
    name: "eStatus",
    comment: "Deleted will comes when admin want to delete company",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Inactive'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("varchar", { name: "vLang", length: 10 })
  vLang: string;

  @Column("varchar", { name: "vCurrencyCompany", length: 100 })
  vCurrencyCompany: string;

  @Column("varchar", { name: "vVat", length: 10 })
  vVat: string;

  @Column("varchar", { name: "vCountry", length: 100 })
  vCountry: string;

  @Column("varchar", { name: "vCode", length: 10 })
  vCode: string;

  @Column("text", { name: "vRestuarantLocation" })
  vRestuarantLocation: string;

  @Column("varchar", { name: "vRestuarantLocationLat", length: 100 })
  vRestuarantLocationLat: string;

  @Column("varchar", { name: "vRestuarantLocationLong", length: 100 })
  vRestuarantLocationLong: string;

  @Column("enum", {
    name: "eAccess",
    enum: ["Deaf", "None"],
    default: () => "'None'",
  })
  eAccess: "Deaf" | "None";

  @Column("varchar", { name: "vNoc", length: 100 })
  vNoc: string;

  @Column("varchar", { name: "vCerti", length: 100 })
  vCerti: string;

  @Column("timestamp", {
    name: "tRegistrationDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tRegistrationDate: Date;

  // @Column("varchar", { name: "vPasswordToken", length: 100 })
  // vPasswordToken: string;

  @Column("varchar", { name: "vPassword_token", length: 100 })
  vPasswordToken: string;

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

  @Column("time", { name: "vFromMonFriTimeSlot1" })
  vFromMonFriTimeSlot1: string;

  @Column("time", { name: "vToMonFriTimeSlot1" })
  vToMonFriTimeSlot1: string;

  @Column("time", { name: "vFromMonFriTimeSlot2" })
  vFromMonFriTimeSlot2: string;

  @Column("time", { name: "vToMonFriTimeSlot2" })
  vToMonFriTimeSlot2: string;

  @Column("time", { name: "vFromSatSunTimeSlot1" })
  vFromSatSunTimeSlot1: string;

  @Column("time", { name: "vToSatSunTimeSlot1" })
  vToSatSunTimeSlot1: string;

  @Column("time", { name: "vFromSatSunTimeSlot2" })
  vFromSatSunTimeSlot2: string;

  @Column("time", { name: "vToSatSunTimeSlot2" })
  vToSatSunTimeSlot2: string;

  @Column("float", {
    name: "fMinOrderValue",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMinOrderValue: number;

  @Column("float", {
    name: "fPackingCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPackingCharge: number;

  @Column("int", { name: "vRadius" })
  vRadius: number;

  @Column("int", { name: "fPrepareTime" })
  fPrepareTime: number;

  @Column("enum", { name: "fOfferAppyType", enum: ["None", "First", "All"] })
  fOfferAppyType: "None" | "First" | "All";

  @Column("enum", { name: "fOfferType", enum: ["", "Flat", "Percentage"] })
  fOfferType: "" | "Flat" | "Percentage";

  @Column("float", {
    name: "fTargetAmt",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTargetAmt: number;

  @Column("float", {
    name: "fOfferAmt",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fOfferAmt: number;

  @Column("float", {
    name: "fMaxOfferAmt",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMaxOfferAmt: number;

  @Column("float", {
    name: "fTax",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTax: number;

  @Column("varchar", { name: "vPaymentEmail", length: 100 })
  vPaymentEmail: string;

  @Column("varchar", { name: "vAcctHolderName", length: 100 })
  vAcctHolderName: string;

  @Column("varchar", { name: "vAcctNo", length: 100 })
  vAcctNo: string;

  @Column("varchar", { name: "vBankName", length: 100 })
  vBankName: string;

  @Column("varchar", { name: "vBankLocation", length: 100 })
  vBankLocation: string;

  @Column("varchar", { name: "vSwiftCode", length: 100 })
  vSwiftCode: string;

  @Column("float", {
    name: "fPricePerPerson",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPricePerPerson: number;

  @Column("varchar", { name: "vAvgRating", length: 100 })
  vAvgRating: string;

  @Column("text", { name: "iGcmRegId" })
  iGcmRegId: string;

  @Column("enum", {
    name: "eDeviceType",
    enum: ["Android", "Ios"],
    default: () => "'Android'",
  })
  eDeviceType: "Android" | "Ios";

  @Column("enum", {
    name: "eAvailable",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAvailable: "Yes" | "No";

  @Column("int", { name: "iMaxItemQty" })
  iMaxItemQty: number;

  @Column("enum", {
    name: "eSignUpType",
    enum: ["Normal", "Facebook", "Twitter", "Google"],
    default: () => "'Normal'",
  })
  eSignUpType: "Normal" | "Facebook" | "Twitter" | "Google";

  @Column("text", { name: "vFirebaseDeviceToken" })
  vFirebaseDeviceToken: string;

  @Column("varchar", { name: "vTimeZone", length: 100 })
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
    default: () => "'Yes'",
  })
  eLogout: "Yes" | "No";

  @Column("enum", {
    name: "eChangeLang",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eChangeLang: "Yes" | "No";

  @Column("enum", {
    name: "eDemoDisplay",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDemoDisplay: "Yes" | "No";

  @Column("enum", { name: "eLock", enum: ["Yes", "No"], default: () => "'No'" })
  eLock: "Yes" | "No";

  @Column("int", { name: "vVerificationCount", default: () => "'0'" })
  vVerificationCount: number;

  @Column("datetime", { name: "dSendverificationDate" })
  dSendverificationDate: Date;

  @Column("varchar", { name: "vEmailVarificationCode", length: 500 })
  vEmailVarificationCode: string;

  @Column("enum", {
    name: "eSystem",
    enum: ["General", "DeliverAll", "Organization"],
    default: () => "'General'",
  })
  eSystem: "General" | "DeliverAll" | "Organization";

  @Column("int", { name: "iAdvertBannerId", default: () => "'0'" })
  iAdvertBannerId: number;

  @Column("timestamp", {
    name: "tSeenAdvertiseTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tSeenAdvertiseTime: Date;

  @Column("enum", {
    name: "eDebugMode",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eDebugMode: "Yes" | "No";

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
    name: "eThermalPrintEnable",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eThermalPrintEnable: "Yes" | "No";

  @Column("enum", {
    name: "eThermalAutoPrint",
    enum: ["Yes", "No"],
    default: () => "'Yes'",
  })
  eThermalAutoPrint: "Yes" | "No";

  @Column("varchar", { name: "vDemoStoreImage", length: 100 })
  vDemoStoreImage: string;

  @Column("enum", {
    name: "eAllowFakeGPS",
    comment:
      "This is just for development purpose. In reality, this field's value must be set to 'No'. If you want to allow fake GPS for particular user then set this field's value to 'Yes'.",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAllowFakeGps: "Yes" | "No";

  @Column("enum", {
    name: "eAutoaccept",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAutoaccept: "Yes" | "No";

  @Column("enum", {
    name: "eStoreLocationUpdate",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eStoreLocationUpdate: "Yes" | "No";

  @Column("datetime", { name: "eStoreLocationUpdateDateTime" })
  eStoreLocationUpdateDateTime: Date;

  @Column("enum", {
    name: "eTakeaway",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eTakeaway: "Yes" | "No";

  @Column("enum", {
    name: "eDriverOption",
    enum: ["Site", "Personal", "All"],
    default: () => "'Site'",
  })
  eDriverOption: "Site" | "Personal" | "All";

  @Column("enum", { name: "eSafetyPractices", enum: ["", "Yes", "No"] })
  eSafetyPractices: "" | "Yes" | "No";

  @Column("enum", {
    name: "eBuyAnyService",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eBuyAnyService: "Yes" | "No";

  @Column("time", { name: "vMonFromSlot1" })
  vMonFromSlot1: string;

  @Column("time", { name: "vMonToSlot1" })
  vMonToSlot1: string;

  @Column("time", { name: "vTueFromSlot1" })
  vTueFromSlot1: string;

  @Column("time", { name: "vTueToSlot1" })
  vTueToSlot1: string;

  @Column("time", { name: "vWedFromSlot1" })
  vWedFromSlot1: string;

  @Column("time", { name: "vWedToSlot1" })
  vWedToSlot1: string;

  @Column("time", { name: "vThuFromSlot1" })
  vThuFromSlot1: string;

  @Column("time", { name: "vThuToSlot1" })
  vThuToSlot1: string;

  @Column("time", { name: "vFriFromSlot1" })
  vFriFromSlot1: string;

  @Column("time", { name: "vFriToSlot1" })
  vFriToSlot1: string;

  @Column("time", { name: "vSatFromSlot1" })
  vSatFromSlot1: string;

  @Column("time", { name: "vSatToSlot1" })
  vSatToSlot1: string;

  @Column("time", { name: "vSunFromSlot1" })
  vSunFromSlot1: string;

  @Column("time", { name: "vSunToSlot1" })
  vSunToSlot1: string;

  @Column("time", { name: "vMonFromSlot2" })
  vMonFromSlot2: string;

  @Column("time", { name: "vMonToSlot2" })
  vMonToSlot2: string;

  @Column("time", { name: "vTueFromSlot2" })
  vTueFromSlot2: string;

  @Column("time", { name: "vTueToSlot2" })
  vTueToSlot2: string;

  @Column("time", { name: "vWedFromSlot2" })
  vWedFromSlot2: string;

  @Column("time", { name: "vWedToSlot2" })
  vWedToSlot2: string;

  @Column("time", { name: "vThuFromSlot2" })
  vThuFromSlot2: string;

  @Column("time", { name: "vThuToSlot2" })
  vThuToSlot2: string;

  @Column("time", { name: "vFriFromSlot2" })
  vFriFromSlot2: string;

  @Column("time", { name: "vFriToSlot2" })
  vFriToSlot2: string;

  @Column("time", { name: "vSatFromSlot2" })
  vSatFromSlot2: string;

  @Column("time", { name: "vSatToSlot2" })
  vSatToSlot2: string;

  @Column("time", { name: "vSunFromSlot2" })
  vSunFromSlot2: string;

  @Column("time", { name: "vSunToSlot2" })
  vSunToSlot2: string;

  @Column("text", { name: "fCommission" })
  fCommission: string;

  @Column("enum", {
    name: "eAppTerminate",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eAppTerminate: "Yes" | "No";

  @Column("text", { name: "iGcmRegIdKiosk" })
  iGcmRegIdKiosk: string;

  @Column("text", { name: "tSessionIdKiosk" })
  tSessionIdKiosk: string;

  @Column("text", { name: "vKioskImage" })
  vKioskImage: string;

  @Column("enum", { name: "eHmsDevice", enum: ["No", "Yes"] })
  eHmsDevice: "No" | "Yes";

  @Column("text", { name: "iServiceIdMulti" })
  iServiceIdMulti: string;

  @Column("enum", { name: "eForKiosk", enum: ["No", "Yes"] })
  eForKiosk: "No" | "Yes";

  @OneToMany(() => RegisterDriver, (registerDriver) => registerDriver.iCompany)
  registerDrivers: RegisterDriver[];
}
