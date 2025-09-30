import { PackageType } from "../../../delivery/package-type/entities/package-type.entity";
import { Hotel } from "../../../stores/hotel/entities/hotel.entity";
import { Organization } from "../../../users/company/organization/entities/organization.entity";
import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { UserPaymentInfo } from "../../../users/user-payment-info/entities/user-payment-info.entity";
import { UserProfile } from "../../../users/user-profile/entities/user-profile.entity";
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

@Entity("cab_request_now", { schema: "amygo1" })
export class CabRequestNow {
  @PrimaryGeneratedColumn({ type: "int", name: "iCabRequestId" })
  iCabRequestId: number;

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

  @Column("text", { name: "iCabBookingId" })
  iCabBookingId: string;

  @Column("int", { name: "iUserId", comment: "link with register_user table" })
  iUserId: number;

  @ManyToOne(() => RegisterUser, (user) => user.cabRequestNows)
  @JoinColumn({ name: "iUserId", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("int", { name: "iDriverId", default: "0" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.cabRequestNows)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("int", { name: "iOrganizationId" })
  iOrganizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.cabRequestNows)
  @JoinColumn({
    name: "iOrganizationId",
    referencedColumnName: "iOrganizationId",
  })
  organization: Organization;

  @Column("int", { name: "iHotelId" })
  iHotelId: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.cabRequestNows)
  @JoinColumn({ name: "iHotelId", referencedColumnName: "iHotelId" })
  hotel: Hotel;

  @Column("longtext", { name: "tMsgCode" })
  tMsgCode: string;

  @Column("int", {
    name: "iTripId",
    comment: "If status is 'Assign'  trip table have entry of this ride",
    default: "0",
  })
  iTripId: number;

  @ManyToOne(() => Trips, (trip) => trip.cabRequestNows)
  @JoinColumn({ name: "iTripId", referencedColumnName: "iTripId" })
  trip: Trips;

  @Column("enum", {
    name: "eStatus",
    comment:
      "Requesting - default; Cancelled- if user want to cancel; Complete - driver accepted the ride",
    enum: ["Requesting", "Cancelled", "Complete", "Pending"],
    default: "Requesting",
  })
  eStatus: "Requesting" | "Cancelled" | "Complete" | "Pending";

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

  @Column("text", { name: "tSourceAddress", comment: "pickup address" })
  tSourceAddress: string;

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

  @Column("text", { name: "tDestAddress", comment: "destination address" })
  tDestAddress: string;

  @Column("enum", {
    name: "ePayType",
    comment: "payment type",
    enum: ["Cash", "Card", "Paypal", "Organization", "Wallet"],
  })
  ePayType: "Cash" | "Card" | "Paypal" | "Organization" | "Wallet";

  @Column("int", {
    name: "iVehicleTypeId",
    comment: "linked to vehicle_type table",
  })
  iVehicleTypeId: number;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.cabRequestNows)
  @JoinColumn({
    name: "iVehicleTypeId",
    referencedColumnName: "iVehicleTypeId",
  })
  vehicleType: VehicleType;

  @Column("int", {
    name: "iRentalPackageId",
    comment: "link to rental_package table",
  })
  iRentalPackageId: number;

  @ManyToOne(
    () => RentalPackage,
    (rentalPackage) => rentalPackage.cabRequestNows,
  )
  @JoinColumn({
    name: "iRentalPackageId",
    referencedColumnName: "iRentalPackageId",
  })
  rentalPackage: RentalPackage;

  @Column("float", {
    name: "fPickUpPrice",
    comment: "related to surge price",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fPickUpPrice: number;

  @Column("float", {
    name: "fNightPrice",
    comment: "related to surge price",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fNightPrice: number;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "Multi-Delivery"],
  })
  eType: "Ride" | "Deliver" | "UberX" | "Multi-Delivery";

  @Column("int", { name: "iPackageTypeId" })
  iPackageTypeId: number;

  @ManyToOne(() => PackageType, (packageType) => packageType.cabRequestNows)
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

  @Column("int", { name: "iQty", default: () => "'1'" })
  iQty: number;

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

  @Column("timestamp", {
    name: "dAddedDate",
    comment: "ride now created date",
    default: () => "CURRENT_TIMESTAMP",
  })
  dAddedDate: Date;

  @Column("enum", {
    name: "eFromCronJob",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFromCronJob: "Yes" | "No";

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
    name: "fDuration",
    comment: "multi-delivery",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDuration: number;

  @Column("float", {
    name: "fDistance",
    comment: "multi-delivery",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDistance: number;

  @Column("float", {
    name: "fTripGenerateFare",
    comment: "multi-delivery",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTripGenerateFare: number;

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

  @Column("enum", {
    name: "eBookingFrom",
    comment: "For Hotel Panel Web",
    enum: ["Admin", "Hotel", "Kiosk", "Company", "User", ""],
    default: "",
  })
  eBookingFrom: "Admin" | "Hotel" | "Kiosk" | "Company" | "User" | "";

  @Column("int", { name: "iHotelBookingId", comment: "For Hotel Panel Web" })
  iHotelBookingId: number;

  @Column("enum", {
    name: "eWalletDebitAllow",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eWalletDebitAllow: "Yes" | "No";

  @Column("enum", {
    name: "eSystem",
    enum: ["General", "DeliverAll"],
    default: "General",
  })
  eSystem: "General" | "DeliverAll";

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

  @ManyToOne(() => UserProfile, (profile) => profile.cabRequestNows)
  @JoinColumn({
    name: "iUserProfileId",
    referencedColumnName: "iUserProfileId",
  })
  userProfile: UserProfile;

  @Column("int", { name: "iTripReasonId" })
  iTripReasonId: number;

  @ManyToOne(() => TripReason, (reason) => reason.cabRequestNows)
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

  @Column("enum", {
    name: "ePoolRide",
    comment: "Only for Pool Rides ",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePoolRide: "Yes" | "No";

  @Column("int", { name: "iPersonSize", comment: "Only for Pool Rides " })
  iPersonSize: number;

  @Column("enum", {
    name: "eBookForSomeOneElse",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBookForSomeOneElse: "Yes" | "No";

  @Column("varchar", { name: "vBookSomeOneName", length: 255 })
  vBookSomeOneName: string;

  @Column("varchar", { name: "vBookSomeOneNumber", length: 50 })
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

  @Column("longtext", { name: "tVehicleTypeData" })
  tVehicleTypeData: string;

  @Column("longtext", { name: "tVehicleTypeFareData" })
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

  @Column("mediumtext", {
    name: "tUserWalletBalance",
    comment: "Gives value of wallet when request of service",
  })
  tUserWalletBalance: string;

  @Column("int", { name: "iFromStationId" })
  iFromStationId: number;

  @Column("int", { name: "iToStationId" })
  iToStationId: number;

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
    default: "",
  })
  eRoundingType: "" | "Addition" | "Substraction";

  @Column("int", { name: "iPaymentInfoId" })
  iPaymentInfoId: number;

  @ManyToOne(
    () => UserPaymentInfo,
    (paymentInfo) => paymentInfo.cabRequestNows,
  )
  @JoinColumn({
    name: "iPaymentInfoId",
    referencedColumnName: "iPaymentInfoId",
  })
  paymentInfo: UserPaymentInfo;

  @Column("enum", {
    name: "isVideoCall",
    enum: ["Yes", "No"],
    default: "No",
  })
  isVideoCall: "Yes" | "No";
}
