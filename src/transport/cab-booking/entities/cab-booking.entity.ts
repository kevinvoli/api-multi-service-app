import { Administrators } from "../../../administration/administrators/entities/administrator.entity";
import { CancelReason } from "../../../core_app/cancel-reason/entities/cancel-reason.entity";
import { PackageType } from "../../../delivery/package-type/entities/package-type.entity";
import { Company } from "../../../users/company/entities/company.entity";
import { Organization } from "../../../users/company/organization/entities/organization.entity";
import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { VehicleType } from "../../../vehicles/vehicle-type/entities/vehicle-type.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RentalPackage } from "../../rental-package/entities/rental-package.entity";
import { TripReason } from "../../trip-reason/entities/trip-reason.entity";
import { Trips } from "../../trips/entities/trip.entity";

@Entity("cab_booking", { schema: "amygo1" })
export class CabBooking {
  @PrimaryGeneratedColumn({ type: "int", name: "iCabBookingId" })
  iCabBookingId: number;

  @Column("varchar", { name: "vBookingNo", length: 255 })
  vBookingNo: string;

  @Column("int", { name: "iCompanyId", default: () => "'1'" })
  iCompanyId: number;

  @ManyToOne(() => Company, (company) => company.cabBookings)
  @JoinColumn({ name: "iCompanyId", referencedColumnName: "iCompanyId" })
  company: Company;

  @Column("int", { name: "iUserId", comment: "link with register_uesr table" })
  iUserId: number;

  @ManyToOne(() => RegisterUser, (user) => user.cabBookings)
  @JoinColumn({ name: "iUserId", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.cabBookings)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("int", { name: "iOrganizationId" })
  iOrganizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.cabBookings)
  @JoinColumn({
    name: "iOrganizationId",
    referencedColumnName: "iOrganizationId",
  })
  organization: Organization;

  @Column("varchar", {
    name: "vSourceLatitude",
    comment: "source lat",
    length: 30,
  })
  vSourceLatitude: string;

  @Column("varchar", {
    name: "vSourceLongitude",
    comment: "source long",
    length: 30,
  })
  vSourceLongitude: string;

  @Column("varchar", {
    name: "vDestLatitude",
    comment: "destination lat",
    length: 30,
  })
  vDestLatitude: string;

  @Column("varchar", {
    name: "vDestLongitude",
    comment: "destination long",
    length: 30,
  })
  vDestLongitude: string;

  @Column("float", {
    name: "vDistance",
    comment: "in KMs",
    precision: 10,
    scale: 3,
    default: () => "'0.000'",
  })
  vDistance: number;

  @Column("float", {
    name: "vDuration",
    comment: "in Minutes",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  vDuration: number;

  @Column("datetime", {
    name: "dBooking_date",
    comment: "date and time where user want to ride",
  })
  dBookingDate: Date;

  @Column("text", { name: "vSourceAddresss", comment: "source address" })
  vSourceAddresss: string;

  @Column("text", { name: "tDestAddress" })
  tDestAddress: string;

  @Column("timestamp", {
    name: "dAddredDate",
    comment: "ride later created date",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddredDate: Date;

  @Column("int", {
    name: "iTripId",
    comment: "If status is 'Assign'  trip table have entry of this ride",
  })
  iTripId: number;

  @ManyToOne(() => Trips, (trip) => trip.cabBookings)
  @JoinColumn({ name: "iTripId", referencedColumnName: "iTripId" })
  trip: Trips;

  @Column("enum", {
    name: "eStatus",
    comment:
      "Pending - default; cancel- if user want to cancel; Assign - driver select ride; Failed-no one availble/accept",
    enum: [
      "Pending",
      "Assign",
      "Accepted",
      "Declined",
      "Failed",
      "Cancel",
      "Completed",
    ],
    default: "Pending",
  })
  eStatus:
    | "Pending"
    | "Assign"
    | "Accepted"
    | "Declined"
    | "Failed"
    | "Cancel"
    | "Completed";

  @Column("enum", {
    name: "ePayType",
    comment: "payment type",
    enum: ["Cash", "Card", "Paypal", "Organization", "Wallet"],
  })
  ePayType: "Cash" | "Card" | "Paypal" | "Organization" | "Wallet";

  @Column("int", {
    name: "iVehicleTypeId",
    comment: "vehicle type id - carx,y,z",
  })
  iVehicleTypeId: number;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.cabBookings)
  @JoinColumn({
    name: "iVehicleTypeId",
    referencedColumnName: "iVehicleTypeId",
  })
  vehicleType: VehicleType;

  @Column("int", {
    name: "iRentalPackageId",
    comment: "linked to rental_package table",
  })
  iRentalPackageId: number;

  @ManyToOne(
    () => RentalPackage,
    (rentalPackage) => rentalPackage.cabBookings,
  )
  @JoinColumn({
    name: "iRentalPackageId",
    referencedColumnName: "iRentalPackageId",
  })
  rentalPackage: RentalPackage;

  @Column("float", {
    name: "fPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fPickUpPrice: number;

  @Column("float", {
    name: "fNightPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fNightPrice: number;

  @Column("enum", { name: "eCancelBy", enum: ["Driver", "Rider", "Admin"] })
  eCancelBy: "Driver" | "Rider" | "Admin";

  @Column("int", { name: "iCancelByUserId" })
  iCancelByUserId: number;

  @Column("datetime", { name: "dCancelDate" })
  dCancelDate: Date;

  @Column("int", { name: "iCancelReasonId", default: "0" })
  iCancelReasonId: number;

  @ManyToOne(() => CancelReason, (reason) => reason.cabBookings)
  @JoinColumn({
    name: "iCancelReasonId",
    referencedColumnName: "iCancelReasonId",
  })
  cancelReason: CancelReason;

  @Column("varchar", { name: "vFailReason", length: 200 })
  vFailReason: string;

  @Column("varchar", { name: "vCancelReason", length: 500 })
  vCancelReason: string;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "Multi-Delivery"],
  })
  eType: "Ride" | "Deliver" | "UberX" | "Multi-Delivery";

  @Column("int", { name: "iPackageTypeId" })
  iPackageTypeId: number;

  @ManyToOne(() => PackageType, (packageType) => packageType.cabBookings)
  @JoinColumn({
    name: "iPackageTypeId",
    referencedColumnName: "iPackageTypeId",
  })
  packageType: PackageType;

  @Column("varchar", { name: "vReceiverName", length: 50 })
  vReceiverName: string;

  @Column("varchar", { name: "vReceiverMobile", length: 50 })
  vReceiverMobile: string;

  @Column("text", { name: "tPickUpIns" })
  tPickUpIns: string;

  @Column("text", { name: "tDeliveryIns" })
  tDeliveryIns: string;

  @Column("text", { name: "tPackageDetails" })
  tPackageDetails: string;

  @Column("varchar", { name: "vCouponCode", length: 255 })
  vCouponCode: string;

  @Column("int", { name: "iUserPetId", default: "0" })
  iUserPetId: number;

  @Column("enum", {
    name: "eMessageSend",
    enum: ["Yes", "No"],
    default: "No",
  })
  eMessageSend: "Yes" | "No";

  @Column("enum", {
    name: "eMessageAdminOne",
    enum: ["Yes", "No"],
    default: "No",
  })
  eMessageAdminOne: "Yes" | "No";

  @Column("enum", {
    name: "eMessageAdminTwo",
    enum: ["Yes", "No"],
    default: "No",
  })
  eMessageAdminTwo: "Yes" | "No";

  @Column("enum", {
    name: "eAutoAssign",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAutoAssign: "Yes" | "No";

  @Column("int", { name: "iCronStage" })
  iCronStage: number;

  @Column("enum", {
    name: "eAssigned",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAssigned: "Yes" | "No";

  @Column("int", { name: "iQty", default: () => "'1'" })
  iQty: number;

  @Column("float", {
    name: "fVisitFee",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fVisitFee: number;

  @Column("float", {
    name: "fMaterialFee",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMaterialFee: number;

  @Column("float", {
    name: "fMiscFee",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMiscFee: number;

  @Column("float", {
    name: "fDriverDiscount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDriverDiscount: number;

  @Column("varchar", { name: "vRideCountry", length: 10 })
  vRideCountry: string;

  @Column("float", {
    name: "fTollPrice",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTollPrice: number;

  @Column("varchar", { name: "vTollPriceCurrencyCode", length: 300 })
  vTollPriceCurrencyCode: string;

  @Column("enum", {
    name: "eTollSkipped",
    enum: ["Yes", "No"],
    default: "No",
  })
  eTollSkipped: "Yes" | "No";

  @Column("enum", {
    name: "eFemaleDriverRequest",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFemaleDriverRequest: "Yes" | "No";

  @Column("enum", {
    name: "eHandiCapAccessibility",
    enum: ["Yes", "No"],
    default: "No",
  })
  eHandiCapAccessibility: "Yes" | "No";

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("float", {
    name: "fWalletMinBalance",
    comment: "for report purpose only,not in use till now",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWalletMinBalance: number;

  @Column("float", {
    name: "fWalletBalance",
    comment: "for report purpose only,not in use till now",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWalletBalance: number;

  @Column("enum", {
    name: "eCommisionDeductEnable",
    comment: "for report purpose only,not in use till now",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCommisionDeductEnable: "Yes" | "No";

  @Column("int", { name: "iUserAddressId", default: "0" })
  iUserAddressId: number;

  @Column("text", { name: "tUserComment" })
  tUserComment: string;

  @Column("varchar", {
    name: "iTempTripDeliveryLocationId",
    comment: "multi-delivery",
    length: 500,
  })
  iTempTripDeliveryLocationId: string;

  @Column("enum", {
    name: "ePaymentByReceiver",
    comment: "multi-delivery",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentByReceiver: "Yes" | "No";

  @Column("float", {
    name: "fTripGenerateFare",
    comment: "multi-delivery",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTripGenerateFare: number;

  @Column("enum", {
    name: "eCancelBySystem",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCancelBySystem: "Yes" | "No";

  @Column("enum", {
    name: "eFlatTrip",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFlatTrip: "Yes" | "No";

  @Column("float", {
    name: "fFlatTripPrice",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fFlatTripPrice: number;

  @Column("int", { name: "iAirportLocationId", default: "0" })
  iAirportLocationId: number;

  @Column("enum", {
    name: "eAirportLocation",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAirportLocation: "Yes" | "No";

  @Column("float", {
    name: "iFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  iFare: number;

  @Column("float", {
    name: "iBaseFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  iBaseFare: number;

  @Column("float", {
    name: "fPricePerMin",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPricePerMin: number;

  @Column("float", {
    name: "fPricePerKM",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPricePerKm: number;

  @Column("float", {
    name: "fCommision",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCommision: number;

  @Column("float", {
    name: "fSurgePriceDiff",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fSurgePriceDiff: number;

  @Column("float", {
    name: "fDiscount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDiscount: number;

  @Column("varchar", { name: "vDiscount", length: 20 })
  vDiscount: string;

  @Column("float", {
    name: "fMinFareDiff",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMinFareDiff: number;

  @Column("float", {
    name: "fWalletDebit",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWalletDebit: number;

  @Column("float", {
    name: "fTax1",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTax1: number;

  @Column("float", {
    name: "fTax2",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTax2: number;

  @Column("float", {
    name: "fTax1Percentage",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTax1Percentage: number;

  @Column("float", {
    name: "fTax2Percentage",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTax2Percentage: number;

  @Column("float", {
    name: "fOutStandingAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fOutStandingAmount: number;

  @Column("int", { name: "iAdminId" })
  iAdminId: number;

  @ManyToOne(() => Administrators, (admin) => admin.cabBookings)
  @JoinColumn({ name: "iAdminId", referencedColumnName: "iAdminId" })
  admin: Administrators;

  @Column("int", { name: "iHotelBookingId", comment: "For Hotel Panel Web" })
  iHotelBookingId: number;

  @Column("varchar", { name: "vRiderRoomNubmer", length: 255 })
  vRiderRoomNubmer: string;

  @Column("enum", {
    name: "eBookingFrom",
    enum: ["Admin", "Hotel", "Company", "User", ""],
    default: "",
  })
  eBookingFrom: "Admin" | "Hotel" | "Company" | "User" | "";

  @Column("enum", {
    name: "eWalletDebitAllow",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eWalletDebitAllow: "Yes" | "No";

  @Column("enum", {
    name: "ePaymentBy",
    enum: ["Passenger", "Organization"],
    default: "Passenger",
  })
  ePaymentBy: "Passenger" | "Organization";

  @Column("varchar", { name: "vProfileEmail", length: 500 })
  vProfileEmail: string;

  @Column("int", { name: "iUserProfileId" })
  iUserProfileId: number;

  @Column("int", { name: "iTripReasonId" })
  iTripReasonId: number;

  @ManyToOne(() => TripReason, (reason) => reason.cabBookings)
  @JoinColumn({ name: "iTripReasonId", referencedColumnName: "iTripReasonId" })
  tripReason: TripReason;

  @Column("text", { name: "vReasonTitle" })
  vReasonTitle: string;

  @Column("enum", {
    name: "eTripReason",
    enum: ["Yes", "No"],
    default: "No",
  })
  eTripReason: "Yes" | "No";

  @Column("float", {
    name: "fAirportPickupSurge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fAirportPickupSurge: number;

  @Column("float", {
    name: "fAirportDropoffSurge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fAirportDropoffSurge: number;

  @Column("enum", {
    name: "eBookForSomeOneElse",
    comment: "Field is used for book for someone else",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBookForSomeOneElse: "Yes" | "No";

  @Column("varchar", {
    name: "vBookSomeOneName",
    comment: "Field is used for book for someone else",
    length: 255,
  })
  vBookSomeOneName: string;

  @Column("varchar", {
    name: "vBookSomeOneNumber",
    comment: "Field is used for book for someone else",
    length: 255,
  })
  vBookSomeOneNumber: string;

  @Column("enum", {
    name: "ePayWallet",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePayWallet: "Yes" | "No";

  @Column("enum", {
    name: "eServiceLocation",
    enum: ["Passanger", "Driver"],
    default: "Passanger",
  })
  eServiceLocation: "Passanger" | "Driver";

  @Column("mediumtext", { name: "tVehicleTypeData" })
  tVehicleTypeData: string;

  @Column("mediumtext", { name: "tVehicleTypeFareData" })
  tVehicleTypeFareData: string;

  @Column("text", {
    name: "tTotalDuration",
    comment: "trip total duration - used as a part of payment flow",
  })
  tTotalDuration: string;

  @Column("text", {
    name: "tTotalDistance",
    comment: "trip total distance - used as a part of payment flow",
  })
  tTotalDistance: string;

  @Column("text", {
    name: "tEstimatedCharge",
    comment: "Estimated Charge - used as a part of payment flow",
  })
  tEstimatedCharge: string;

  @Column("text", {
    name: "tUserWalletBalance",
    comment: "Gives value of wallet when request of service",
  })
  tUserWalletBalance: string;

  @Column("mediumtext", {
    name: "vWorkLocation",
    comment: "Only used for UberX. And will be linked to Driver",
  })
  vWorkLocation: string;

  @Column("mediumtext", {
    name: "vWorkLocationLatitude",
    comment: "Only used for UberX. And will be linked to Driver",
  })
  vWorkLocationLatitude: string;

  @Column("mediumtext", {
    name: "vWorkLocationLongitude",
    comment: "Only used for UberX. And will be linked to Driver",
  })
  vWorkLocationLongitude: string;

  @Column("enum", {
    name: "eSelectWorkLocation",
    comment: "Only used for UberX. And will be linked to Driver",
    enum: ["Dynamic", "Fixed"],
  })
  eSelectWorkLocation: "Dynamic" | "Fixed";

  @Column("int", { name: "iFromStationId" })
  iFromStationId: number;

  @Column("int", { name: "iToStationId" })
  iToStationId: number;

  @Column("int", { name: "iPaymentInfoId" })
  iPaymentInfoId: number;

  @Column("float", {
    name: "fRoundingAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRoundingAmount: number;

  @Column("enum", {
    name: "eRoundingType",
    enum: ["", "Addition", "Substraction"],
  })
  eRoundingType: "" | "Addition" | "Substraction";

  @Column("longtext", { name: "tDeliveryData" })
  tDeliveryData: string;

  @Column("enum", {
    name: "isVideoCall",
    enum: ["No", "Yes"],
    default: "No",
  })
  isVideoCall: "No" | "Yes";
}
