import { Banners } from "../../../cms/banners/entities/banner.entity";
import { ContentCubexDetails } from "../../../cms/content-cubex-details/entities/content-cubex-detail.entity";
import { DocumentMaster } from "../../../users/document-master/entities/document-master.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MasterVehicleCategory } from "../../master-vehicle-category/entities/master-vehicle-category.entity";
import { VehicleType } from "../../vehicle-type/entities/vehicle-type.entity";

export enum VehicleCategoryType {
  Ride = "Ride",
  MotoRide = "MotoRide",
  Delivery = "Delivery",
  MultipleDelivery = "MultipleDelivery",
  MotoDelivery = "MotoDelivery",
  Rental = "Rental",
  MotoRental = "MotoRental",
  MoreDelivery = "MoreDelivery",
  DeliverAll = "DeliverAll",
  ServiceProvider = "ServiceProvider",
  Donation = "Donation",
  Fly = "Fly",
  Genie = "Genie",
  Runner = "Runner",
  Anywhere = "Anywhere",
  ServiceBid = "ServiceBid",
  RidePool = "RidePool",
  VideoConsult = "VideoConsult",
}

@Index("eStatus", ["eStatus"], {})
@Index("eShowType", ["eShowType"], {})
@Index("iParentId", ["iParentId"], {})
@Index("iVehicleCategoryId", ["iVehicleCategoryId"], {})
@Entity("vehicle_category", { schema: "amygo1" })
export class VehicleCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "iVehicleCategoryId" })
  iVehicleCategoryId: number;

  @Column("longtext", { name: "vCategory_EN" })
  vCategoryEn: string;

  @Column("longtext", { name: "vCategory_FR" })
  vCategoryFr: string;

  @Column("mediumtext", { name: "vCategoryTitle_EN" })
  vCategoryTitleEn: string;

  @Column("mediumtext", { name: "vCategoryTitle_FR" })
  vCategoryTitleFr: string;

  @Column("longtext", { name: "tCategoryDesc_EN" })
  tCategoryDescEn: string;

  @Column("longtext", { name: "tCategoryDesc_FR" })
  tCategoryDescFr: string;

  @Column("int", { name: "iParentId", default: "0" })
  iParentId: number;

  @ManyToOne(() => VehicleCategory, (vehicleCategory) => vehicleCategory.children)
  @JoinColumn({ name: "iParentId", referencedColumnName: "iVehicleCategoryId" })
  parent: VehicleCategory;

  @OneToMany(() => VehicleCategory, (vehicleCategory) => vehicleCategory.parent)
  children: VehicleCategory[];

  @Column("mediumtext", { name: "vLogo" })
  vLogo: string;

  @Column("mediumtext", { name: "vLogo1" })
  vLogo1: string;

  @Column("mediumtext", { name: "vHomepageLogo" })
  vHomepageLogo: string;

  @Column("enum", {
    name: "ePriceType",
    enum: ["Service", "Provider"],
    default: "Service",
  })
  ePriceType: "Service" | "Provider";

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

  @Column("int", { name: "iDisplayOrder", default: () => "'1'" })
  iDisplayOrder: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eShowType",
    enum: ["Icon", "Banner", "Icon-Banner"],
    default: "Icon",
  })
  eShowType: "Icon" | "Banner" | "Icon-Banner";

  @Column("enum", {
    name: "eMaterialCommision",
    enum: ["Yes", "No"],
    default: "No",
  })
  eMaterialCommision: "Yes" | "No";

  @Column("mediumtext", { name: "vBannerImage" })
  vBannerImage: string;


  @Column("enum", {
    name: "eCatType",
    enum: VehicleCategoryType,
    default: VehicleCategoryType.ServiceProvider,
  })
  eCatType: VehicleCategoryType;

  @Column("enum", {
    name: "eSubCatType",
    enum: ["", "Ambulance"],
    default: "",
  })
  eSubCatType: "" | "Ambulance";

  @Column("enum", {
    name: "eFor",
    enum: ["", "RideCategory", "DeliveryCategory", "DeliverAllCategory"],
    default: "",
  })
  eFor: "" | "RideCategory" | "DeliveryCategory" | "DeliverAllCategory";

  @Column("enum", {
    name: "eDeliveryType",
    comment: "Applies only when eCatType set to delivery",
    enum: ["", "Single", "Multi"],
  })
  eDeliveryType: "" | "Single" | "Multi";

  @Column("int", {
    name: "iServiceId",
    comment:
      "Linked to service_categories. Only applies for Food/Grocery/DeliverAll",
  })
  iServiceId: number;

  @Column("longtext", { name: "tBannerButtonText" })
  tBannerButtonText: string;

  @Column("enum", { name: "eDetailPageView", enum: ["", "Icon", "Banner"] })
  eDetailPageView: "" | "Icon" | "Banner";

  @Column("float", {
    name: "fCommision",
    comment: "Associate with eMaterialCommision",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fCommision: number;

  @Column("float", {
    name: "fWaitingFees",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fWaitingFees: number;

  @Column("int", { name: "iWaitingFeeTimeLimit", default: "0" })
  iWaitingFeeTimeLimit: number;

  @Column("float", {
    name: "fCancellationFare",
    comment: "Used for Other services when Flow is provider based.",
    precision: 10,
    scale: 2,
  })
  fCancellationFare: number;

  @Column("int", {
    name: "iCancellationTimeLimit",
    comment: "Used for Other services when Flow is provider based.",
  })
  iCancellationTimeLimit: number;

  @Column("int", { name: "iMasterVehicleCategoryId" })
  iMasterVehicleCategoryId: number;

  @ManyToOne(
    () => MasterVehicleCategory,
    (masterVehicleCategory) => masterVehicleCategory.vehicleCategories,
  )
  @JoinColumn({
    name: "iMasterVehicleCategoryId",
    referencedColumnName: "iMasterVehicleCategoryId",
  })
  masterVehicleCategory: MasterVehicleCategory;

  @Column("int", { name: "iDisplayOrderHomepage" })
  iDisplayOrderHomepage: number;

  @Column("longtext", { name: "lCatDescHomepage" })
  lCatDescHomepage: string;

  @Column("mediumtext", { name: "vCatDescbtnHomepage" })
  vCatDescbtnHomepage: string;

  @Column("mediumtext", { name: "vCatNameHomepage" })
  vCatNameHomepage: string;

  @Column("mediumtext", { name: "vCatSloganHomepage" })
  vCatSloganHomepage: string;

  @Column("mediumtext", { name: "vCatTitleHomepage" })
  vCatTitleHomepage: string;

  @Column("mediumtext", { name: "vHomepageBanner" })
  vHomepageBanner: string;

  @Column("mediumtext", { name: "vServiceCatTitleHomepage" })
  vServiceCatTitleHomepage: string;

  @Column("mediumtext", { name: "vServiceHomepageBanner" })
  vServiceHomepageBanner: string;

  @Column("longtext", { name: "eCatViewType" })
  eCatViewType: string;

  @Column("longtext", { name: "tListDescription" })
  tListDescription: string;

  @Column("longtext", { name: "vListLogo" })
  vListLogo: string;

  @Column("text", { name: "vListLogo1" })
  vListLogo1: string;

  @Column("text", { name: "vListLogo2" })
  vListLogo2: string;

  @Column("enum", { name: "eOTPCodeEnable", enum: ["No", "Yes"] })
  eOtpCodeEnable: "No" | "Yes";

  @Column("enum", {
    name: "ePromoteBanner",
    enum: ["No", "Yes"],
    default: "No",
  })
  ePromoteBanner: "No" | "Yes";

  @Column("text", { name: "vPromoteBannerImage" })
  vPromoteBannerImage: string;

  @Column("text", { name: "tPromoteBannerTitle" })
  tPromoteBannerTitle: string;

  @Column("mediumtext", { name: "vHomepageLogoOurServices" })
  vHomepageLogoOurServices: string;

  @Column("enum", {
    name: "eVideoConsultEnable",
    enum: ["No", "Yes"],
    default: "No",
  })
  eVideoConsultEnable: "No" | "Yes";

  @Column("decimal", {
    name: "eVideoConsultServiceCharge",
    precision: 10,
    scale: 2,
  })
  eVideoConsultServiceCharge: number;

  @Column("text", { name: "eVideoServiceDescription" })
  eVideoServiceDescription: string;

  @Column("decimal", {
    name: "fCommissionVideoConsult",
    precision: 10,
    scale: 2,
  })
  fCommissionVideoConsult: number;

  @Column("text", { name: "vIconDetails" })
  vIconDetails: string;

  @Column("enum", { name: "eForMedicalService", enum: ["No", "Yes"] })
  eForMedicalService: "No" | "Yes";

  @Column("text", { name: "tMedicalServiceInfo" })
  tMedicalServiceInfo: string;

  @Column("text", { name: "vLogo2" })
  vLogo2: string;

  @Column("text", { name: "vListLogo3" })
  vListLogo3: string;

  @OneToMany(() => Banners, (banner) => banner.vehicleCategory)
  banners: Banners[];

  @OneToMany(
    () => ContentCubexDetails,
    (contentCubexDetail) => contentCubexDetail.vehicleCategory,
  )
  contentCubexDetails: ContentCubexDetails[];

  @OneToMany(() => DocumentMaster, (docMaster) => docMaster.vehicleCategory)
  documentMasters: DocumentMaster[];

  @OneToMany(() => VehicleType, (vehicleType) => vehicleType.vehicleCategory)
  vehicleTypes: VehicleType[];
}
