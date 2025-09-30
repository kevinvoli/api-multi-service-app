import { AirportsurchargeFare } from "../../../transport/airportsurcharge-fare/entities/airportsurcharge-fare.entity";
import { CabBooking } from "../../../transport/cab-booking/entities/cab-booking.entity";
import { CabRequestNow } from "../../../transport/cab-request-now/entities/cab-request-now.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
import { Intentions } from "../../../business-logic/intentions/entities/intention.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle_type", { schema: "amygo1" })
export class VehicleType {
  @PrimaryGeneratedColumn({ type: "int", name: "iVehicleTypeId" })
  iVehicleTypeId: number;

  @Column("int", { name: "iVehicleCategoryId", default: "0" })
  iVehicleCategoryId: number;

  @Column("int", { name: "iLocationid", default: () => "'-1'" })
  iLocationid: number;

  @Column("int", { name: "iCountryId", default: () => "'-1'" })
  iCountryId: number;

  @Column("int", { name: "iStateId", default: () => "'-1'" })
  iStateId: number;

  @Column("int", { name: "iCityId", default: () => "'-1'" })
  iCityId: number;

  @Column("mediumtext", { name: "vAddress" })
  vAddress: string;

  @Column("mediumtext", {
    name: "vVehicleType",
    comment: "name of car type - carx, cargo",
  })
  vVehicleType: string;

  @Column("mediumtext", { name: "vVehicleType_EN" })
  vVehicleTypeEn: string;

  @Column("mediumtext", { name: "vVehicleType_FR" })
  vVehicleTypeFr: string;

  @Column("mediumtext", { name: "vRentalAlias_EN" })
  vRentalAliasEn: string;

  @Column("mediumtext", { name: "vRentalAlias_FR" })
  vRentalAliasFr: string;

  @Column("enum", {
    name: "eFareType",
    enum: ["Regular", "Fixed", "Hourly"],
    default: "Fixed",
  })
  eFareType: "Regular" | "Fixed" | "Hourly";

  @Column("float", { name: "fFixedFare", precision: 10, scale: 2 })
  fFixedFare: number;

  @Column("float", {
    name: "fPricePerKM",
    comment: "price per KM",
    precision: 10,
    scale: 2,
  })
  fPricePerKm: number;

  @Column("float", {
    name: "fPricePerMin",
    comment: "price per Minute",
    precision: 10,
    scale: 2,
  })
  fPricePerMin: number;

  @Column("float", { name: "fPricePerHour", precision: 10, scale: 2 })
  fPricePerHour: number;

  @Column("float", { name: "fMinHour", precision: 10, scale: 2 })
  fMinHour: number;

  @Column("float", { name: "fTimeSlot", precision: 10, scale: 2 })
  fTimeSlot: number;

  @Column("float", { name: "fTimeSlotPrice", precision: 10, scale: 2 })
  fTimeSlotPrice: number;

  @Column("float", { name: "iBaseFare", precision: 10, scale: 2 })
  iBaseFare: number;

  @Column("float", { name: "fCommision", precision: 10, scale: 2 })
  fCommision: number;

  @Column("float", { name: "iMinFare", precision: 10, scale: 2 })
  iMinFare: number;

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
    name: "ePickStatus",
    enum: ["Active", "Inactive"],
    default: "Inactive",
  })
  ePickStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eNightStatus",
    enum: ["Active", "Inactive"],
    default: "Inactive",
  })
  eNightStatus: "Active" | "Inactive";

  @Column("time", { name: "tPickStartTime" })
  tPickStartTime: string;

  @Column("time", { name: "tPickEndTime" })
  tPickEndTime: string;

  @Column("time", { name: "tNightStartTime" })
  tNightStartTime: string;

  @Column("time", { name: "tNightEndTime" })
  tNightEndTime: string;

  @Column("int", { name: "iPersonSize", default: () => "'4'" })
  iPersonSize: number;

  @Column("mediumtext", { name: "vLogo" })
  vLogo: string;

  @Column("mediumtext", { name: "vLogo1" })
  vLogo1: string;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "DeliverAll"],
    default: "UberX",
  })
  eType: "Ride" | "Deliver" | "UberX" | "DeliverAll";

  @Column("enum", {
    name: "eIconType",
    enum: ["Car", "Bike", "Cycle", "Truck", "Fly"],
    default: "Car",
  })
  eIconType: "Car" | "Bike" | "Cycle" | "Truck" | "Fly";

  @Column("time", { name: "tMonPickStartTime" })
  tMonPickStartTime: string;

  @Column("time", { name: "tMonPickEndTime" })
  tMonPickEndTime: string;

  @Column("float", {
    name: "fMonPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fMonPickUpPrice: number;

  @Column("time", { name: "tTuePickStartTime" })
  tTuePickStartTime: string;

  @Column("time", { name: "tTuePickEndTime" })
  tTuePickEndTime: string;

  @Column("float", {
    name: "fTuePickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fTuePickUpPrice: number;

  @Column("time", { name: "tWedPickStartTime" })
  tWedPickStartTime: string;

  @Column("time", { name: "tWedPickEndTime" })
  tWedPickEndTime: string;

  @Column("float", {
    name: "fWedPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fWedPickUpPrice: number;

  @Column("time", { name: "tThuPickStartTime" })
  tThuPickStartTime: string;

  @Column("time", { name: "tThuPickEndTime" })
  tThuPickEndTime: string;

  @Column("float", {
    name: "fThuPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fThuPickUpPrice: number;

  @Column("time", { name: "tFriPickStartTime" })
  tFriPickStartTime: string;

  @Column("time", { name: "tFriPickEndTime" })
  tFriPickEndTime: string;

  @Column("float", {
    name: "fFriPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fFriPickUpPrice: number;

  @Column("time", { name: "tSatPickStartTime" })
  tSatPickStartTime: string;

  @Column("time", { name: "tSatPickEndTime" })
  tSatPickEndTime: string;

  @Column("float", {
    name: "fSatPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fSatPickUpPrice: number;

  @Column("time", { name: "tSunPickStartTime" })
  tSunPickStartTime: string;

  @Column("time", { name: "tSunPickEndTime" })
  tSunPickEndTime: string;

  @Column("float", {
    name: "fSunPickUpPrice",
    precision: 10,
    scale: 2,
    default: () => "'1.00'",
  })
  fSunPickUpPrice: number;

  @Column("text", {
    name: "tNightSurgeData",
    comment:
      "This field must contains a json format data of day wise surge charge with start/end time.",
  })
  tNightSurgeData: string;

  @Column("enum", {
    name: "eAllowQty",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAllowQty: "Yes" | "No";

  @Column("int", { name: "iMaxQty", default: () => "'1'" })
  iMaxQty: number;

  @Column("float", { name: "fVisitFee", precision: 10, scale: 2 })
  fVisitFee: number;

  @Column("float", {
    name: "fCancellationFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCancellationFare: number;

  @Column("int", { name: "iCancellationTimeLimit" })
  iCancellationTimeLimit: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("float", {
    name: "fWaitingFees",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWaitingFees: number;

  @Column("int", { name: "iWaitingFeeTimeLimit" })
  iWaitingFeeTimeLimit: number;

  @Column("int", { name: "iDisplayOrder", default: () => "'1'" })
  iDisplayOrder: number;

  @Column("float", { name: "fRadius", precision: 10, scale: 2 })
  fRadius: number;

  @Column("float", {
    name: "fDeliveryCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDeliveryCharge: number;

  @Column("float", {
    name: "fDeliveryChargeCancelOrder",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDeliveryChargeCancelOrder: number;

  @Column("float", {
    name: "fPoolPercentage",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPoolPercentage: number;

  @Column("enum", {
    name: "ePoolStatus",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePoolStatus: "Yes" | "No";

  @Column("float", {
    name: "fTripHoldFees",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTripHoldFees: number;

  @Column("text", { name: "tTypeDesc", comment: "Used for Other Services." })
  tTypeDesc: string;

  @Column("enum", {
    name: "eDeliveryType",
    comment:
      "This field is only for delivery vehicle types. This is just for identification between single delivery vehicle types and multi delivery vehicle types.",
    enum: ["", "Single", "Multi"],
    default: "",
  })
  eDeliveryType: "" | "Single" | "Multi";

  @Column("float", {
    name: "fBufferAmount",
    comment:
      "This field is applicable for  different payment methods. This is used when user is requesting a service.",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fBufferAmount: number;

  @Column("enum", { name: "eFly", enum: ["1", "0"], default: "0" })
  eFly: "1" | "0";

  @Column("text", { name: "tInfoText" })
  tInfoText: string;

  @Column("enum", {
    name: "eFareCalcModel",
    enum: ["Fixed", "Incremental"],
    default: "Incremental",
  })
  eFareCalcModel: "Fixed" | "Incremental";

  @Column("enum", {
    name: "eDeliveryHelper",
    enum: ["No", "Yes"],
    default: "No",
  })
  eDeliveryHelper: "No" | "Yes";

  @Column("longtext", { name: "tDeliveryHelperNoteUser" })
  tDeliveryHelperNoteUser: string;

  @Column("longtext", { name: "tDeliveryHelperNoteDriver" })
  tDeliveryHelperNoteDriver: string;

  @Column("enum", { name: "eOTPCodeEnable", enum: ["No", "Yes"] })
  eOtpCodeEnable: "No" | "Yes";

  @OneToMany(
    () => AirportsurchargeFare,
    (airportSurchargeFare) => airportSurchargeFare.vehicleType,
  )
  airportSurchargeFares: AirportsurchargeFare[];

  @OneToMany(() => CabBooking, (cabBooking) => cabBooking.vehicleType)
  cabBookings: CabBooking[];

  @OneToMany(() => CabRequestNow, (cabRequestNow) => cabRequestNow.vehicleType)
  cabRequestNows: CabRequestNow[];

  @OneToMany(() => Trips, (trip) => trip.vehicleType)
  trips: Trips[];

  @OneToMany(() => Intentions, (intention) => intention.vehicleType)
  intentions: Intentions[];
}
