import { Orders } from "../../../orders/entities/order.entity";
import { Company } from "../../../users/company/entities/company.entity";
import { Trips } from "../../../transport/trips/entities/trip.entity";
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
}
