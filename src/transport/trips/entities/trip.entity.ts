import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { Company } from "../../../users/company/entities/company.entity";
import { Orders } from "../../../orders/entities/order.entity";
import { DriverVehicle } from "../../../users/driver-vehicle/entities/driver-vehicle.entity";
import { ServiceCategories } from "../../../core_app/service-categories/entities/service-category.entity";
import { Organization } from "../../../users/company/organization/entities/organization.entity";
import { Hotel } from "../../../stores/hotel/entities/hotel.entity";
import { VehicleType } from "../../../vehicles/vehicle-type/entities/vehicle-type.entity";
import { RentalPackage } from "../rental-package/entities/rental-package.entity";
import { CancelReason } from "../../../core_app/cancel-reason/entities/cancel-reason.entity";
import { UserProfile } from "../../../users/user-profile/entities/user-profile.entity";
import { TripReason } from "../trip-reason/entities/trip-reason.entity";
import { UserAddress } from "../../../users/user-address/entities/user-address.entity";
import { UserPaymentInfo } from "../../../users/user-payment-info/entities/user-payment-info.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CabBooking } from "../../cab-booking/entities/cab-booking.entity";
import { CabRequestNow } from "../../cab-request-now/entities/cab-request-now.entity";


@Index("vOrderNoUnique", ["vOrderNoUnique"], { unique: true })
@Index("trips_drivers", ["iDriverId"], {})
@Index("trips_users", ["iUserId"], {})
@Index("index_trdate", ["tTripRequestDate"], {})
@Index("index_company_id", ["iCompanyId"], {})
@Index("index_start_date", ["tStartDate"], {})
@Index("index_end_date", ["tEndDate"], {})
@Index("iActive", ["iActive", "vCouponCode"], {})
@Entity("trips", { schema: "amygo1" })
export class Trips {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "iTripId",
    comment: "unique auto increment id",
  })
  iTripId: number;

  @Column("varchar", { name: "vRideNo", length: 100 })
  vRideNo: string;

  @Column("int", { name: "iUserId", comment: "Link with register_info" })
  iUserId: number;

  @Column("int", {
    name: "iDriverId",
    comment: "Link with registration_driver_detail",
  })
  iDriverId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @ManyToOne(() => Company, (company) => company.trips)
  @JoinColumn({ name: "iCompanyId", referencedColumnName: "iCompanyId" })
  company: Company;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @ManyToOne(() => Orders, (order) => order.trips)
  @JoinColumn({ name: "iOrderId", referencedColumnName: "iOrderId" })
  order: Orders;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @ManyToOne(() => ServiceCategories, (service) => service.trips)
  @JoinColumn({ name: "iServiceId", referencedColumnName: "iServiceId" })
  service: ServiceCategories;

  @Column("int", { name: "iOrganizationId" })
  iOrganizationId: number;

  @ManyToOne(() => Organization, (organization) => organization.trips)
  @JoinColumn({
    name: "iOrganizationId",
    referencedColumnName: "iOrganizationId",
  })
  organization: Organization;

  @Column("float", {
    name: "fDeliveryCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDeliveryCharge: number;

  @Column("int", { name: "iHotelId" })
  iHotelId: number;

  @ManyToOne(() => Hotel, (hotel) => hotel.trips)
  @JoinColumn({ name: "iHotelId", referencedColumnName: "iHotelId" })
  hotel: Hotel;

  @Column("datetime", { name: "tTripRequestDate" })
  tTripRequestDate: Date;

  @Column("datetime", { name: "tDriverArrivedDate" })
  tDriverArrivedDate: Date;

  @Column("timestamp", {
    name: "tStartDate",
    nullable:true,
  })
  tStartDate: Date;

  @Column("timestamp", {
    name: "tEndDate",
    nullable:true,
  })
  tEndDate: Date;

  @Column("int", {
    name: "iDriverVehicleId",
    comment: "Link with driver_vehicle",
  })
  iDriverVehicleId: number;

  @ManyToOne(() => DriverVehicle, (driverVehicle) => driverVehicle.trips)
  @JoinColumn({
    name: "iDriverVehicleId",
    referencedColumnName: "iDriverVehicleId",
  })
  driverVehicle: DriverVehicle;

  @Column("mediumtext", { name: "tStartLat" })
  tStartLat: string;

  @Column("mediumtext", { name: "tStartLong" })
  tStartLong: string;

  @Column("mediumtext", { name: "tEndLat" })
  tEndLat: string;

  @Column("mediumtext", { name: "tEndLong" })
  tEndLong: string;

  @Column("text", { name: "tSaddress" })
  tSaddress: string;

  @Column("text", { name: "tDaddress" })
  tDaddress: string;

  @Column("float", {
    name: "iFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  iFare: number;

  @Column("float", {
    name: "fPricePerKM",
    comment: "link with vehicle_type",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPricePerKm: number;

  @Column("float", {
    name: "iBaseFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  iBaseFare: number;

  @Column("float", {
    name: "fPricePerMin",
    comment: "link with vehicle_type",
    precision: 10,
    scale: 2,
    default: () => "'1.50'",
  })
  fPricePerMin: number;

  @Column("float", {
    name: "fCommision",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCommision: number;

  @Column("float", {
    name: "fKioskHotelCommision",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fKioskHotelCommision: number;

  @Column("float", {
    name: "fDistance",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDistance: number | null;

  @Column("float", {
    name: "fDuration",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDuration: number;

  @Column("enum", {
    name: "iActive",
    comment: "Active,On Going Trip, Finished, Canceled ",
    enum: [
      "Active",
      "Canceled",
      "Finished",
      "On Going Trip",
      "Arrived",
      "Inactive",
    ],
  })
  iActive:
    | "Active"
    | "Canceled"
    | "Finished"
    | "On Going Trip"
    | "Arrived"
    | "Inactive";

  @Column("int", { name: "iVerificationCode" })
  iVerificationCode: number;

  @Column("enum", {
    name: "eVerified",
    enum: ["Verified", "Not Verified"],
    default: "Not Verified",
  })
  eVerified: "Verified" | "Not Verified";

  @Column("enum", { name: "eCarType", enum: ["CarX", "CarGo"] })
  eCarType: "CarX" | "CarGo";

  @Column("int", { name: "iVehicleTypeId", comment: "link with vehicle_type" })
  iVehicleTypeId: number;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.trips)
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

  @ManyToOne(() => RentalPackage, (rentalPackage) => rentalPackage.trips)
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

  @Column("enum", {
    name: "vTripPaymentMode",
    enum: ["Cash", "Paypal", "Card", "Organization", "Wallet"],
  })
  vTripPaymentMode: "Cash" | "Paypal" | "Card" | "Organization" | "Wallet";

  @Column("varchar", { name: "vCurrencyPassenger", length: 300 })
  vCurrencyPassenger: string;

  @Column("varchar", { name: "vCurrencyDriver", length: 255 })
  vCurrencyDriver: string;

  @Column("float", {
    name: "fRatioPassenger",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRatioPassenger: number;

  @Column("float", {
    name: "fRatioDriver",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRatioDriver: number;

  @Column("enum", {
    name: "ePayment_request",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentRequest: "Yes" | "No";

  @Column("int", { name: "iCancelReasonId", default: "0" })
  iCancelReasonId: number;

  @ManyToOne(() => CancelReason, (cancelReason) => cancelReason.trips)
  @JoinColumn({
    name: "iCancelReasonId",
    referencedColumnName: "iCancelReasonId",
  })
  cancelReason: CancelReason;

  @Column("varchar", { name: "vCancelReason", length: 255 })
  vCancelReason: string;

  @Column("varchar", { name: "vCancelComment", length: 255 })
  vCancelComment: string;

  @Column("enum", {
    name: "eCancelled",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCancelled: "Yes" | "No";

  @Column("varchar", { name: "vCouponCode", length: 255 })
  vCouponCode: string;

  @Column("varchar", { name: "vDiscount", length: 20 })
  vDiscount: string;

  @Column("float", {
    name: "fDiscount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDiscount: number;

  @Column("enum", {
    name: "eDriverPaymentStatus",
    enum: ["Settelled", "Unsettelled"],
    default: "Unsettelled",
  })
  eDriverPaymentStatus: "Settelled" | "Unsettelled";

  @Column("enum", {
    name: "eHotelPaymentStatus",
    enum: ["Settelled", "Unsettelled"],
    default: "Unsettelled",
  })
  eHotelPaymentStatus: "Settelled" | "Unsettelled";

  @Column("enum", {
    name: "ePaymentCollect",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentCollect: "Yes" | "No";

  @Column("enum", {
    name: "ePaymentCollect_Delivery",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentCollectDelivery: "Yes" | "No";

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "Multi-Delivery"],
    default: "Ride",
  })
  eType: "Ride" | "Deliver" | "UberX" | "Multi-Delivery";

  @Column("varchar", { name: "vImage", length: 500 })
  vImage: string;

  @Column("enum", {
    name: "eImgSkip",
    enum: ["None", "Yes", "No"],
    default: "None",
  })
  eImgSkip: "None" | "Yes" | "No";

  @Column("int", { name: "iPackageTypeId" })
  iPackageTypeId: number;

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

  @Column("int", { name: "iUserPetId", default: "0" })
  iUserPetId: number;

  @Column("varchar", { name: "vDeliveryConfirmCode", length: 55 })
  vDeliveryConfirmCode: string;

  @Column("double", {
    name: "fRatio_EUR",
    precision: 10,
    scale: 4,
    default: () => "'1.0000'",
  })
  fRatioEur: number;

  @Column("double", {
    name: "fRatio_USD",
    precision: 10,
    scale: 4,
    default: () => "'1.0000'",
  })
  fRatioUsd: number;

  @Column("double", {
    name: "fRatio_XOF",
    precision: 10,
    scale: 4,
    default: () => "'0.0000'",
  })
  fRatioXof: number;

  @Column("enum", {
    name: "eFareType",
    comment: "to see the trip is of fixed price or regular",
    enum: ["Regular", "Fixed", "Hourly"],
  })
  eFareType: "Regular" | "Fixed" | "Hourly";

  @Column("float", {
    name: "fMinFareDiff",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMinFareDiff: number;

  @Column("float", {
    name: "fWalletDebit",
    comment: "wallet amount debited for this trip",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWalletDebit: number;

  @Column("float", {
    name: "fSurgePriceDiff",
    comment: "applied surge price diff",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fSurgePriceDiff: number;

  @Column("varchar", { name: "vBeforeImage", length: 255 })
  vBeforeImage: string;

  @Column("varchar", { name: "vAfterImage", length: 255 })
  vAfterImage: string;

  @Column("float", {
    name: "fTripGenerateFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTripGenerateFare: number;

  @Column("mediumtext", { name: "fGDtime" })
  fGDtime: string;

  @Column("mediumtext", { name: "fGDdistance" })
  fGDdistance: string;

  @Column("float", {
    name: "fTipPrice",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTipPrice: number;

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

  @Column("float", {
    name: "fCancellationFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCancellationFare: number;

  @Column("enum", {
    name: "eCancelChargeFailed",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCancelChargeFailed: "Yes" | "No";

  @Column("enum", {
    name: "eCancelledBy",
    enum: ["", "Passenger", "Driver"],
    default: "",
  })
  eCancelledBy: "" | "Passenger" | "Driver";

  @Column("varchar", { name: "vCountryUnitRider", length: 100 })
  vCountryUnitRider: string;

  @Column("varchar", { name: "vCountryUnitDriver", length: 100 })
  vCountryUnitDriver: string;

  @Column("float", {
    name: "fTollPrice",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTollPrice: number;

  @Column("decimal", {
    name: "fOtherCharges",
    precision: 10,
    scale: 4,
    default: () => "'0.0000'",
  })
  fOtherCharges: string;

  @Column("varchar", { name: "vTollPriceCurrencyCode", length: 300 })
  vTollPriceCurrencyCode: string;

  @Column("enum", { name: "eTollSkipped", enum: ["Yes", "No"] })
  eTollSkipped: "Yes" | "No";

  @Column("enum", {
    name: "eHailTrip",
    enum: ["Yes", "No"],
    default: "No",
  })
  eHailTrip: "Yes" | "No";

  @Column("datetime", { name: "dPauseTime" })
  dPauseTime: Date;

  @Column("mediumtext", { name: "tTotalPauseTime" })
  tTotalPauseTime: string;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("int", { name: "iUserAddressId", default: "0" })
  iUserAddressId: number;

  @ManyToOne(() => UserAddress, (userAddress) => userAddress.trips)
  @JoinColumn({
    name: "iUserAddressId",
    referencedColumnName: "iUserAddressId",
  })
  userAddress: UserAddress;

  @Column("text", { name: "tUserComment" })
  tUserComment: string;

  @Column("enum", {
    name: "eBeforeUpload",
    enum: ["Yes", "No"],
    default: "No",
  })
  eBeforeUpload: "Yes" | "No";

  @Column("enum", {
    name: "eAfterUpload",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAfterUpload: "Yes" | "No";

  @Column("enum", {
    name: "ePaymentByReceiver",
    comment: "multi-delivery",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentByReceiver: "Yes" | "No";

  @Column("enum", {
    name: "eFareGenerated",
    comment: "multi-delivery",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFareGenerated: "Yes" | "No";

  @Column("int", {
    name: "iRunningTripDeliveryNo",
    comment: "multi-delivery",
    default: "0",
  })
  iRunningTripDeliveryNo: number;

  @Column("enum", {
    name: "eSignVerification",
    comment: "multi-delivery",
    enum: ["Yes", "No"],
    default: "No",
  })
  eSignVerification: "Yes" | "No";

  @Column("varchar", {
    name: "vSignImage",
    comment: "multi-delivery",
    length: 255,
  })
  vSignImage: string;

  @Column("text", { name: "iCabBookingId" })
  iCabBookingId: string;

  @Column("text", { name: "iCabRequestId" })
  iCabRequestId: string;

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

  @Column("float", {
    name: "fWaitingFees",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWaitingFees: number;

  @Column("int", { name: "iAirportLocationId", default: "0" })
  iAirportLocationId: number;

  @Column("enum", {
    name: "eAirportLocation",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAirportLocation: "Yes" | "No";

  @Column("float", {
    name: "fOutStandingAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fOutStandingAmount: number;

  @Column("int", { name: "iWaitingFeeTimeLimit" })
  iWaitingFeeTimeLimit: number;

  @Column("varchar", { name: "vVerificationMethod", length: 255 })
  vVerificationMethod: string;

  @Column("enum", {
    name: "eServiceEnd",
    comment: "This is related to UberX service.",
    enum: ["Yes", "No"],
    default: "No",
  })
  eServiceEnd: "Yes" | "No";

  @Column("enum", {
    name: "eBookingFrom",
    comment: "For Hotel Panel Web",
    enum: ["Admin", "Hotel", "Kiosk", "Company", ""],
    default: "",
  })
  eBookingFrom: "Admin" | "Hotel" | "Kiosk" | "Company" | "";

  @Column("float", {
    name: "fHotelCommision",
    comment: "For Hotel Panel Web",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fHotelCommision: number;

  @Column("int", { name: "iHotelBookingId", comment: "For Hotel Panel Web" })
  iHotelBookingId: number;

  @Column("float", {
    name: "fHotelBookingChargePercentage",
    comment: "link with Administrator tabel",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fHotelBookingChargePercentage: number;

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

  @Column("enum", {
    name: "eOrganizationPaymentStatus",
    enum: ["Settelled", "Unsettelled"],
    default: "Unsettelled",
  })
  eOrganizationPaymentStatus: "Settelled" | "Unsettelled";

  @Column("int", { name: "iUserProfileId" })
  iUserProfileId: number;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.trips)
  @JoinColumn({
    name: "iUserProfileId",
    referencedColumnName: "iUserProfileId",
  })
  userProfile: UserProfile;

  @Column("int", { name: "iTripReasonId" })
  iTripReasonId: number;

  @ManyToOne(() => TripReason, (tripReason) => tripReason.trips)
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

  @Column("int", { name: "iPoolParentId", default: "0" })
  iPoolParentId: number;

  @Column("float", {
    name: "fExtraPersonCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fExtraPersonCharge: number;

  @Column("float", {
    name: "fPoolDuration",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPoolDuration: number;

  @Column("float", {
    name: "fPoolDistance",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPoolDistance: number;

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

  @Column("float", {
    name: "fTripHoldPrice",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTripHoldPrice: number;

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

  @Column("float", {
    name: "fAirportPickupSurgeAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fAirportPickupSurgeAmount: number;

  @Column("float", {
    name: "fAirportDropoffSurgeAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fAirportDropoffSurgeAmount: number;

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

  @Column("enum", {
    name: "eCardFailed",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCardFailed: "Yes" | "No";

  @Column("enum", {
    name: "eRoundingType",
    enum: ["", "Addition", "Substraction"],
  })
  eRoundingType: "" | "Addition" | "Substraction";

  @Column("float", { name: "fRoundingAmount", precision: 10, scale: 2 })
  fRoundingAmount: number;

  @Column("int", { name: "iFromStationId" })
  iFromStationId: number;

  @Column("int", { name: "iToStationId" })
  iToStationId: number;

  @Column("int", { name: "iTollOTP", default: "0" })
  iTollOtp: number;

  @Column("int", { name: "iPaymentInfoId" })
  iPaymentInfoId: number;

  @ManyToOne(() => UserPaymentInfo, (paymentInfo) => paymentInfo.trips)
  @JoinColumn({
    name: "iPaymentInfoId",
    referencedColumnName: "iPaymentInfoId",
  })
  paymentInfo: UserPaymentInfo;

  @Column("float", { name: "fRoundingAmountDriver", precision: 10, scale: 2 })
  fRoundingAmountDriver: number;

  @Column("enum", {
    name: "eRoundingTypeDriver",
    enum: ["", "Addition", "Substraction"],
  })
  eRoundingTypeDriver: "" | "Addition" | "Substraction";

  @Column("float", { name: "fAddedOutstandingamt", precision: 12 })
  fAddedOutstandingamt: number;

  @Column("text", { name: "vChargesDetailData", default: () => "''" })
  vChargesDetailData: string;

  @Column("varchar", { name: "eApproveByUser", length: 100 })
  eApproveByUser: string;

  @Column("enum", {
    name: "eApproveRequestSentByDriver",
    enum: ["Yes", "No"],
    default: "No",
  })
  eApproveRequestSentByDriver: "Yes" | "No";

  @Column("varchar", { name: "eApproved", length: 100 })
  eApproved: string;

  @Column("enum", {
    name: "eVerifyTollCharges",
    enum: ["Yes", "No"],
    default: "No",
  })
  eVerifyTollCharges: "Yes" | "No";

  @Column("longtext", { name: "debugdata" })
  debugdata: string;

  @Column("enum", { name: "eAskCodeToUser", enum: ["No", "Yes"] })
  eAskCodeToUser: "No" | "Yes";

  @Column("text", { name: "vRandomCode" })
  vRandomCode: string;

  @Column("varchar", {
    name: "vOrderNoUnique",
    nullable: true,
    unique: true,
    length: 255,
  })
  vOrderNoUnique: string | null;

  @Column("enum", {
    name: "eDriverArrived",
    enum: ["Yes", "No"],
    default: "No",
  })
  eDriverArrived: "Yes" | "No";

  @Column("text", { name: "vIdProofImg" })
  vIdProofImg: string;

  @Column("text", { name: "vFaceMaskVerifyImage" })
  vFaceMaskVerifyImage: string;

  @Column("enum", {
    name: "isVideoCall",
    enum: ["No", "Yes"],
    default: "No",
  })
  isVideoCall: "No" | "Yes";

  @Column("enum", {
    name: "isSkipRating",
    enum: ["Yes", "No"],
    default: "No",
  })
  isSkipRating: "Yes" | "No";

  @ManyToOne(() => RegisterDriver, (registerDriver) => registerDriver.trips, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "iDriverId", referencedColumnName: "iDriverId" }])
  iDriver: RegisterDriver;

  @ManyToOne(() => RegisterUser, (registerUser) => registerUser.trips, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "iUserId", referencedColumnName: "iUserId" }])
  iUser: RegisterUser;

  @OneToMany(() => CabBooking, (cabBooking) => cabBooking.trip)
  cabBookings: CabBooking[];

  @OneToMany(() => CabRequestNow, (cabRequestNow) => cabRequestNow.trip)
  cabRequestNows: CabRequestNow[];
}
