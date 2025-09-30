import { Orders } from "../../../orders/entities/order.entity";
import { Company } from "../../../users/company/entities/company.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
import { Intentions } from "../../../business-logic/intentions/entities/intention.entity";
import { ObjectCategories } from "../../../business-logic/object-categories/entities/object-category.entity";
import { ObjectObjectifs } from "../../../business-logic/object-objectifs/entities/object-objectif.entity";
import { ObjectProspections } from "../../../business-logic/object-prospections/entities/object-prospection.entity";
import { ObjectRealisations } from "../../../business-logic/object-realisation/entities/object-realisation.entity";
import { Banners } from "../../../cms/banners/entities/banner.entity";
import { StoreWiseBanners } from "../../../cms/store-wise-banners/entities/store-wise-banner.entity";
import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Index("SERVICE_NAME", ["vService"], { unique: true })
@Entity("service_categories", { schema: "amygo1" })
export class ServiceCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "iServiceId" })
  iServiceId: number;

  @Column("longtext", {
    name: "vService",
    unique: true,
    comment:
      "This will be used for theme setup. Don't change values. This should be unique.",
  })
  vService: string;

  @Column("enum", {
    name: "eShowTerms",
    enum: ["Yes", "No"],
    default: "No",
  })
  eShowTerms: "Yes" | "No";

  @Column("enum", {
    name: "eProofUpload",
    enum: ["Yes", "No"],
    default: "No",
  })
  eProofUpload: "Yes" | "No";

  @Column("mediumtext", { name: "vServiceName_EN" })
  vServiceNameEn: string;

  @Column("mediumtext", { name: "vServiceName_FR" })
  vServiceNameFr: string;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("mediumtext", {
    name: "vImage",
    comment:
      'Image must be in the ratio of "16:9". Minimum resolution is 2880*1620.',
  })
  vImage: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eType",
    enum: ["separate", "combine"],
    default: "separate",
  })
  eType: "separate" | "combine";

  @Column("enum", {
    name: "prescription_required",
    enum: ["Yes", "No"],
    default: "No",
  })
  prescriptionRequired: "Yes" | "No";

  @Column("longtext", {
    name: "tDescription",
    comment: "Store language wise data in json format",
  })
  tDescription: string;

  @Column("longtext", {
    name: "tProofNote",
    comment: "Store language wise data in json format",
  })
  tProofNote: string;

  @Column("longtext", { name: "tProofNoteDriver" })
  tProofNoteDriver: string;

  @Column("longtext", { name: "tProofNoteStore" })
  tProofNoteStore: string;

  @Column("enum", { name: "eOTPCodeEnable", enum: ["No", "Yes"] })
  eOtpCodeEnable: "No" | "Yes";

  @OneToMany(() => Orders, (orders) => orders.serviceCategory)
  orders: Orders[];

  @OneToMany(() => Company, (company) => company.service)
  companies: Company[];

  @OneToMany(() => Trips, (trip) => trip.service)
  trips: Trips[];

  @OneToMany(() => Intentions, (intention) => intention.service)
  intentions: Intentions[];

  @OneToMany(
    () => ObjectCategories,
    (objectCategory) => objectCategory.service,
  )
  objectCategories: ObjectCategories[];

  @OneToMany(
    () => ObjectObjectifs,
    (objectObjectif) => objectObjectif.service,
  )
  objectObjectifs: ObjectObjectifs[];

  @OneToMany(
    () => ObjectProspections,
    (objectProspection) => objectProspection.service,
  )
  objectProspections: ObjectProspections[];

  @OneToMany(
    () => ObjectRealisations,
    (objectRealisation) => objectRealisation.service,
  )
  objectRealisations: ObjectRealisations[];

  @OneToMany(() => Banners, (banner) => banner.service)
  banners: Banners[];

  @OneToMany(
    () => StoreWiseBanners,
    (storeWiseBanner) => storeWiseBanner.service,
  )
  storeWiseBanners: StoreWiseBanners[];
}
