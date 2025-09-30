import { Company } from "../../users/company/entities/company.entity";
import { RegisterDriver } from "../../users/register-driver/entities/register-driver.entity";
import { RegisterUser } from "../../users/register-user/entities/register-user.entity";
import { ServiceCategories } from "../../core_app/service-categories/entities/service-category.entity";
import { OrderStatus } from "../order-status/entities/order-status.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderDriverLog } from "../order-driver-log/entities/order-driver-log.entity";
import { OrderRequest } from "../order-request/entities/order-request.entity";
import { OrderStatusLogs } from "../order-status-logs/entities/order-status-log.entity";

@Index("iCustomerId", ["iUserId"], {})
@Index("vOrderNo", ["vOrderNo"], {})
@Index("dDate", ["dDate"], {})
@Index("iOrderId", ["iOrderId"], {})
@Entity("orders", { schema: "amygo1" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "int", name: "iOrderId" })
  iOrderId: number;

  @Column("int", {
    name: "iServiceId",
    comment: "Linked to service_categories table",
  })
  iServiceId: number;

  @Column("int", { name: "iUserId", default: "0" })
  iUserId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iUserAddressId" })
  iUserAddressId: number;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("varchar", { name: "vOrderNo", length: 50, default: "" })
  vOrderNo: string;

  @Column("datetime", { name: "tOrderRequestDate" })
  tOrderRequestDate: Date;

  @Column("varchar", { name: "vUserEmail", length: 255 })
  vUserEmail: string;

  @Column("float", {
    name: "fSubTotal",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fSubTotal: number;

  @Column("float", {
    name: "fOffersDiscount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fOffersDiscount: number;

  @Column("float", {
    name: "fPackingCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPackingCharge: number;

  @Column("float", {
    name: "fDeliveryCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDeliveryCharge: number;

  @Column("float", {
    name: "fTax",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTax: number;

  @Column("varchar", { name: "vDiscount", length: 50, default: "0" })
  vDiscount: string;

  @Column("float", {
    name: "fDiscount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDiscount: number;

  @Column("float", {
    name: "fCommision",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCommision: number;

  @Column("float", {
    name: "fWalletDebit",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWalletDebit: number;

  @Column("float", {
    name: "fOutStandingAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fOutStandingAmount: number;

  @Column("float", {
    name: "fNetTotal",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fNetTotal: number;

  @Column("float", {
    name: "fTotalGenerateFare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTotalGenerateFare: number;

  @Column("varchar", { name: "vName", length: 50, default: "" })
  vName: string;

  @Column("varchar", { name: "vLastName", length: 50, default: "" })
  vLastName: string;

  @Column("text", { name: "vIdProofImg" })
  vIdProofImg: string;

  @Column("varchar", { name: "vCompany", nullable: true, length: 255 })
  vCompany: string | null;

  @Column("float", {
    name: "fMaxOfferAmt",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fMaxOfferAmt: number;

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

  @Column("enum", { name: "fOfferAppyType", enum: ["None", "First", "All"] })
  fOfferAppyType: "None" | "First" | "All";

  @Column("enum", {
    name: "fOfferType",
    enum: ["", "Flat", "Percentage"],
    default: "",
  })
  fOfferType: "" | "Flat" | "Percentage";

  @Column("enum", { name: "ePaid", enum: ["Yes", "No"],  default: "No", })
  ePaid: "Yes" | "No";

  @Column("varchar", {
    name: "iTransactionId",
    length: 100,
    default: "0",
  })
  iTransactionId: string;

  @Column("mediumtext", { name: "vPaymentRemarks" })
  vPaymentRemarks: string;

  @Column("mediumtext", { name: "tPaymentResponse" })
  tPaymentResponse: string;

  @Column("text", { name: "vInstruction" })
  vInstruction: string;

  @Column("varchar", { name: "vFromIP", length: 20, default: "" })
  vFromIp: string;

  @Column("varchar", { name: "vCouponCode", length: 20, default: "" })
  vCouponCode: string;

  @Column("datetime", { name: "dDate", default: () => "CURRENT_TIMESTAMP" })
  dDate: Date;

  @Column("enum", {
    name: "ePaymentOption",
    enum: ["Cash", "Card", "Wallet"],
    default: "Cash",
  })
  ePaymentOption: "Cash" | "Card" | "Wallet";

  @Column("int", {
    name: "iStatusCode",
    comment: "linked with order_status table",
    default:  "1",
  })
  iStatusCode: number;

  @Column("datetime", { name: "dDeliveryDate" })
  dDeliveryDate: Date;

  @Column("enum", {
    name: "eCancelledBy",
    enum: ["Driver", "Passenger", "Company", "Admin"],
  })
  eCancelledBy: "Driver" | "Passenger" | "Company" | "Admin";

  @Column("float", {
    name: "fCancellationCharge",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCancellationCharge: number;

  @Column("int", { name: "iCancelledById" })
  iCancelledById: number;

  @Column("varchar", { name: "vCancelReason", length: 500 })
  vCancelReason: string;

  @Column("int", { name: "iReasonId" })
  iReasonId: number;

  @Column("float", {
    name: "fRefundAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRefundAmount: number;

  @Column("float", {
    name: "fRestaurantPayAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRestaurantPayAmount: number;

  @Column("float", {
    name: "fRestaurantPaidAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fRestaurantPaidAmount: number;

  @Column("float", {
    name: "fDriverPaidAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fDriverPaidAmount: number;

  @Column("enum", {
    name: "eRestaurantPaymentStatus",
    enum: ["Settled", "Unsettled"],
    default: "Unsettled",
  })
  eRestaurantPaymentStatus: "Settled" | "Unsettled";

  @Column("enum", {
    name: "eAdminPaymentStatus",
    enum: ["Settled", "Unsettled"],
    default:"Unsettled",
  })
  eAdminPaymentStatus: "Settled" | "Unsettled";

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

  @Column("double", {
    name: "fRatio_EUR",
    precision: 10,
    scale: 4,
    default: () => "'1.0000'",
  })
  fRatioEur: number;

  @Column("enum", {
    name: "eCheckUserWallet",
    enum: ["Yes", "No"],
     default: "No",
  })
  eCheckUserWallet: "Yes" | "No";

  @Column("enum", {
    name: "ePayWallet",
    enum: ["Yes", "No"],
     default: "No",
  })
  ePayWallet: "Yes" | "No";

  @Column("text", {
    name: "tUserWalletBalance",
    comment: "Gives value of wallet when order placed",
  })
  tUserWalletBalance: string;

  @Column("enum", {
    name: "eOrderplaced_by",
    enum: ["User", "Admin", "Store", "Kiosk"],
    default: "User",
  })
  eOrderplacedBy: "User" | "Admin" | "Store" | "Kiosk";

  @Column("int", { name: "iAdminUserId_placedorder", default: "0" })
  iAdminUserIdPlacedorder: number;

  @Column("date", { name: "dCronExpiredDate" })
  dCronExpiredDate: string;

  @Column("enum", {
    name: "eSentMailAdmin",
    enum: ["Yes", "No"],
     default: "No",
  })
  eSentMailAdmin: "Yes" | "No";

  @Column("text", { name: "tDriverIds" })
  tDriverIds: string;

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

  @Column("text", { name: "selectedPreferences" })
  selectedPreferences: string;

  @Column("text", { name: "vImageDeliveryPref" })
  vImageDeliveryPref: string;

  @Column("enum", { name: "eTakeaway", enum: ["", "Yes", "No"] })
  eTakeaway: "" | "Yes" | "No";

  @Column("float", {
    name: "fTipAmount",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fTipAmount: number;

  @Column("enum", {
    name: "eTipIncludedAtOrderRequest",
    enum: ["Yes", "No"],
     default: "No",
  })
  eTipIncludedAtOrderRequest: "Yes" | "No";

  @Column("enum", {
    name: "eBuyAnyService",
    enum: ["Yes", "No"],
     default: "No",
  })
  eBuyAnyService: "Yes" | "No";

  @Column("enum", {
    name: "genieWaitingForUserApproval",
    enum: ["Yes", "No"],
     default: "No",
  })
  genieWaitingForUserApproval: "Yes" | "No";

  @Column("enum", {
    name: "genieUserApproved",
    enum: ["Yes", "No"],
     default: "No",
  })
  genieUserApproved: "Yes" | "No";

  @Column("float", {
    name: "fDeliveryChargeCancelled",
    precision: 12,
    default: "0",
  })
  fDeliveryChargeCancelled: number;

  @Column("enum", {
    name: "eForPickDropGenie",
    enum: ["No", "Yes"],
     default: "No",
  })
  eForPickDropGenie: "No" | "Yes";

  @Column("text", { name: "tVoiceDirectionFile" })
  tVoiceDirectionFile: string;

  @Column("enum", {
    name: "eCancelledbyDriver",
    enum: ["No", "Yes"],
     default: "No",
  })
  eCancelledbyDriver: "No" | "Yes";

  @Column("text", { name: "vCancelReasonDriver" })
  vCancelReasonDriver: string;

  @Column("enum", { name: "eAskCodeToUser", enum: ["No", "Yes"] })
  eAskCodeToUser: "No" | "Yes";

  @Column("text", { name: "vRandomCode" })
  vRandomCode: string;

  @Column("enum", { name: "eSMSSendToUser", enum: ["No", "Yes"] })
  eSmsSendToUser: "No" | "Yes";

  @Column("text", { name: "tKioskUserDetails" })
  tKioskUserDetails: string;

  @Column("enum", {
    name: "eProcessed",
    enum: ["No", "Yes"],
     default: "No",
  })
  eProcessed: "No" | "Yes";

  @Column("enum", { name: "eOrderPlatform", enum: ["", "Web", "App"] })
  eOrderPlatform: "" | "Web" | "App";

  @Column("text", { name: "tOutStandingIds" })
  tOutStandingIds: string;

  @Column("datetime", {
    name: "date_start_order",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateStartOrder: Date | null;

  @Column("datetime", {
    name: "date_end_order",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  dateEndOrder: Date | null;

  @OneToMany(() => OrderDriverLog, (orderDriverLog) => orderDriverLog.order)
  orderDriverLogs: OrderDriverLog[];

  @OneToMany(() => OrderRequest, (orderRequest) => orderRequest.order)
  orderRequest: OrderRequest[];

  @OneToMany(
    () => OrderStatusLogs,
    (orderStatusLogs) => orderStatusLogs.order,
  )
  orderStatusLogs: OrderStatusLogs[];

  @ManyToOne(
    () => ServiceCategories,
    (serviceCategories) => serviceCategories.orders,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "iServiceId", referencedColumnName: "iServiceId" }])
  serviceCategory: ServiceCategories;

  @ManyToOne(() => RegisterUser, (registerUser) => registerUser.orders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "iUserId", referencedColumnName: "iUserId" }])
  user: RegisterUser;

  // @ManyToOne(() => RegisterDriver, (registerDriver) => registerDriver.orders, {
  //   onDelete: "NO ACTION",
  //   onUpdate: "NO ACTION",
  // })
  // @JoinColumn([{ name: "iDriverId", referencedColumnName: "iDriverId" }])
  // driver: RegisterDriver;

  // @ManyToOne(() => Company, (company) => company.orders, {
  //   onDelete: "NO ACTION",
  //   onUpdate: "NO ACTION",
  // })
  // @JoinColumn([{ name: "iCompanyId", referencedColumnName: "iCompanyId" }])
  // company: Company;

  @ManyToOne(() => OrderStatus, (orderStatus) => orderStatus.orders, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "iStatusCode", referencedColumnName: "iStatusCode" }])
  orderStatus: OrderStatus;
}
