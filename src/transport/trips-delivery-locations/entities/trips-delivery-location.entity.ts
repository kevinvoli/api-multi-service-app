import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trips_delivery_locations")
export class TripsDeliveryLocations {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripDeliveryLocationId" })
  iTripDeliveryLocationId: number;

  @Column("text", {
    name: "tPickUpIns",
    comment: "Use for strret,building,flat number",
  })
  tPickUpIns: string;

  @Column("text", { name: "tDeliveryIns" })
  tDeliveryIns: string;

  @Column("text", { name: "tPackageDetails" })
  tPackageDetails: string;

  @Column("int", { name: "iTripId", comment: "Linked with Trips table" })
  iTripId: number;

  @Column("text", { name: "iCabBookingId" })
  iCabBookingId: string;

  @Column("enum", {
    name: "eRequestType",
    enum: ["Ridenow", "Ridelater"],
    default: "Ridenow",
  })
  eRequestType: "Ridenow" | "Ridelater";

  @Column("int", { name: "iTempReceiverId" })
  iTempReceiverId: number;

  @Column("int", { name: "iRecipientId" })
  iRecipientId: number;

  @Column("varchar", { name: "vReceiverName", length: 500 })
  vReceiverName: string;

  @Column("varchar", { name: "vReceiverMobile", length: 500 })
  vReceiverMobile: string;

  @Column("varchar", { name: "vReceiverLatitude", length: 200 })
  vReceiverLatitude: string;

  @Column("varchar", { name: "vReceiverLongitude", length: 200 })
  vReceiverLongitude: string;

  @Column("text", { name: "vReceiverAddress" })
  vReceiverAddress: string;

  @Column("int", { name: "iPackageTypeId" })
  iPackageTypeId: number;

  @Column("text", { name: "tShipmentDetails" })
  tShipmentDetails: string;

  @Column("text", { name: "tAditionalNotes" })
  tAditionalNotes: string;

  @Column("varchar", { name: "vWeight", length: 100 })
  vWeight: string;

  @Column("varchar", { name: "vQuantity", length: 100 })
  vQuantity: string;

  @Column("timestamp", {
    name: "tArrivedTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  tArrivedTime: Date;

  @Column("timestamp", {
    name: "tStartTime",
    nullable:true,
  })
  tStartTime: Date;

  @Column("timestamp", {
    name: "tEndTime",
    nullable:true,
  })
  tEndTime: Date;

  @Column("timestamp", {
    name: "tDeliveredTime",
    nullable:true,
  })
  tDeliveredTime: Date;

  @Column("varchar", { name: "vCancelReason", length: 500 })
  vCancelReason: string;

  @Column("varchar", { name: "vCancelComment", length: 500 })
  vCancelComment: string;

  @Column("enum", {
    name: "eCancelled",
    enum: ["Yes", "No"],
    default: "No",
  })
  eCancelled: "Yes" | "No";

  @Column("varchar", { name: "tStartLat", length: 500 })
  tStartLat: string;

  @Column("varchar", { name: "tStartLong", length: 500 })
  tStartLong: string;

  @Column("varchar", { name: "tEndLat", length: 500 })
  tEndLat: string;

  @Column("varchar", { name: "tEndLong", length: 500 })
  tEndLong: string;

  @Column("text", { name: "tSaddress" })
  tSaddress: string;

  @Column("text", { name: "tDaddress" })
  tDaddress: string;

  @Column("float", { name: "iFare", precision: 12 })
  iFare: number;

  @Column("float", { name: "fPricePerKM", precision: 12 })
  fPricePerKm: number;

  @Column("float", { name: "iBaseFare", precision: 12 })
  iBaseFare: number;

  @Column("float", { name: "fPricePerMin", precision: 12 })
  fPricePerMin: number;

  @Column("float", { name: "fCommision", precision: 12 })
  fCommision: number;

  @Column("float", { name: "fDistance", precision: 12 })
  fDistance: number;

  @Column("enum", {
    name: "iActive",
    enum: ["Active", "Finished", "Canceled", "On Going Trip"],
    default: "Active",
  })
  iActive: "Active" | "Finished" | "Canceled" | "On Going Trip";

  @Column("enum", {
    name: "ePaymentCollect",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentCollect: "Yes" | "No";

  @Column("varchar", { name: "vDeliveryConfirmCode", length: 100 })
  vDeliveryConfirmCode: string;

  @Column("float", { name: "fMinFareDiff", precision: 10, scale: 2 })
  fMinFareDiff: number;

  @Column("float", { name: "fSurgePriceDiff", precision: 12 })
  fSurgePriceDiff: number;

  @Column("float", { name: "fTripGenerateFare", precision: 12 })
  fTripGenerateFare: number;

  @Column("float", { name: "fRideAlongShipment", precision: 12 })
  fRideAlongShipment: number;

  @Column("enum", {
    name: "ePaymentByReceiver",
    enum: ["Yes", "No"],
    default: "No",
  })
  ePaymentByReceiver: "Yes" | "No";

  @Column("enum", {
    name: "eSignVerification",
    enum: ["Yes", "No"],
    default: "No",
  })
  eSignVerification: "Yes" | "No";

  @Column("varchar", { name: "vSignImage", length: 255 })
  vSignImage: string;

  @Column("enum", {
    name: "ePaymentBy",
    enum: ["Sender", "Receiver", "Individual"],
  })
  ePaymentBy: "Sender" | "Receiver" | "Individual";
}
