import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_outstanding_amount", { schema: "amygo1" })
export class TripOutstandingAmount {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripOutstandId" })
  iTripOutstandId: number;

  @Column("enum", {
    name: "ePaidByWallet",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ePaidByWallet: "Yes" | "No";

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iTripId" })
  iTripId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iOrganizationId" })
  iOrganizationId: number;

  @Column("float", {
    name: "fWalletDebit",
    precision: 12,
    default: () => "'0'",
  })
  fWalletDebit: number;

  @Column("float", { name: "fCancellationFare", precision: 12 })
  fCancellationFare: number;

  @Column("float", {
    name: "fPendingAmount",
    precision: 12,
    default: () => "'0'",
  })
  fPendingAmount: number;

  @Column("float", { name: "fCommision", precision: 12, default: () => "'0'" })
  fCommision: number;

  @Column("float", {
    name: "fDriverPendingAmount",
    precision: 12,
    default: () => "'0'",
  })
  fDriverPendingAmount: number;

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
    name: "ePaidByPassenger",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ePaidByPassenger: "Yes" | "No";

  @Column("enum", {
    name: "ePaidByOrganization",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ePaidByOrganization: "Yes" | "No";

  @Column("enum", {
    name: "ePaidToDriver",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ePaidToDriver: "Yes" | "No";

  @Column("enum", {
    name: "vTripPaymentMode",
    enum: ["Cash", "Paypal", "Card", "Organization"],
  })
  vTripPaymentMode: "Cash" | "Paypal" | "Card" | "Organization";

  @Column("varchar", { name: "vTripAdjusmentId", length: 100 })
  vTripAdjusmentId: string;

  @Column("varchar", { name: "vOrderAdjusmentId", length: 200 })
  vOrderAdjusmentId: string;

  @Column("enum", {
    name: "ePaymentBy",
    enum: ["Passenger", "Organization"],
    default: () => "'Passenger'",
  })
  ePaymentBy: "Passenger" | "Organization";

  @Column("enum", {
    name: "eBillGenerated",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  eBillGenerated: "Yes" | "No";

  @Column("enum", {
    name: "eAuthoriseIdName",
    enum: ["iCabBookingId", "iCabRequestId", "iTripId", "No"],
    default: () => "'No'",
  })
  eAuthoriseIdName: "iCabBookingId" | "iCabRequestId" | "iTripId" | "No";

  @Column("int", { name: "iAuthoriseId", default: () => "'0'" })
  iAuthoriseId: number;

  @Column("enum", {
    name: "ePaidByAdmin",
    enum: ["Yes", "No"],
    default: () => "'No'",
  })
  ePaidByAdmin: "Yes" | "No";

  @Column("int", { name: "iBiddingPostId" })
  iBiddingPostId: number;

  @Column("varchar", { name: "vBidAdjusmentId", length: 200 })
  vBidAdjusmentId: string;
}
