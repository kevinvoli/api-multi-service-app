import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], { unique: true })
@Entity("content_cubex_details", { schema: "amygo1" })
export class ContentCubexDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("enum", {
    name: "eFor",
    enum: [
      "Food",
      "Ride",
      "Earn",
      "Delivery",
      "Business",
      "Moto",
      "Fly",
      "About",
      "Otherservice",
      "Grocery",
      "DeliverAll",
      "Other",
      "Genie",
    ],
  })
  eFor:
    | "Food"
    | "Ride"
    | "Earn"
    | "Delivery"
    | "Business"
    | "Moto"
    | "Fly"
    | "About"
    | "Otherservice"
    | "Grocery"
    | "DeliverAll"
    | "Other"
    | "Genie";

  @Column("int", {
    name: "iVehicleCategoryId",
    comment: "Its used for ride,deliverall,otherservice\t",
  })
  iVehicleCategoryId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("longtext", { name: "lBannerSection" })
  lBannerSection: string;

  @Column("longtext", { name: "lHowitworkSection" })
  lHowitworkSection: string;

  @Column("longtext", { name: "lSecuresafeSection" })
  lSecuresafeSection: string;

  @Column("longtext", { name: "lDownloadappSection" })
  lDownloadappSection: string;

  @Column("longtext", { name: "lCalltobookSection" })
  lCalltobookSection: string;

  @Column("longtext", { name: "lEarnSection" })
  lEarnSection: string;

  @Column("longtext", { name: "lCalculateSection" })
  lCalculateSection: string;

  @Column("longtext", { name: "lCartypeSection" })
  lCartypeSection: string;

  @Column("longtext", { name: "lServiceSection" })
  lServiceSection: string;

  @Column("longtext", { name: "lBenefitSection" })
  lBenefitSection: string;

  @Column("longtext", { name: "lKioskSection" })
  lKioskSection: string;
}
