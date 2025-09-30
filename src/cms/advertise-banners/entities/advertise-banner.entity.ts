import { BannerImpression } from "../../banner-impression/entities/banner-impression.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("advertise_banners", { schema: "amygo1" })
export class AdvertiseBanners {
  @PrimaryGeneratedColumn({ type: "int", name: "iAdvertBannerId" })
  iAdvertBannerId: number;

  @Column("varchar", { name: "vBannerTitle", length: 255 })
  vBannerTitle: string;

  @Column("varchar", { name: "vBannerImage", length: 255 })
  vBannerImage: string;

  @Column("text", { name: "tRedirectUrl" })
  tRedirectUrl: string;

  @Column("enum", {
    name: "ePosition",
    comment: "MainScreen",
    enum: ["MainScreen"],
    default: "MainScreen",
  })
  ePosition: "MainScreen";

  @Column("int", { name: "iImpression" })
  iImpression: number;

  @Column("date", { name: "dExpiryDate" })
  dExpiryDate: string;

  @Column("int", { name: "iDispOrder" })
  iDispOrder: number;

  @Column("date", { name: "dAddedDate" })
  dAddedDate: string;

  @Column("date", { name: "dStartDate" })
  dStartDate: string;

  @Column("enum", {
    name: "eStatus",
    comment: "'Active','Inactive'",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eImpression",
    comment: "Unlimited,Limited",
    enum: ["Unlimited", "Limited"],
    default: "Limited",
  })
  eImpression: "Unlimited" | "Limited";

  @Column("enum", {
    name: "eValidityType",
    comment: "Permanent,Custom",
    enum: ["Permanent", "Custom"],
    default: "Custom",
  })
  eValidityType: "Permanent" | "Custom";

  @OneToMany(
    () => BannerImpression,
    (bannerImpression) => bannerImpression.advertiseBanner,
  )
  bannerImpressions: BannerImpression[];
}
