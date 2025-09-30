import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AdvertiseBanners } from "../../advertise-banners/entities/advertise-banner.entity";

@Entity("banner_impression", { schema: "amygo1" })
export class BannerImpression {
  @PrimaryGeneratedColumn({ type: "int", name: "iBannerImpLog" })
  iBannerImpLog: number;

  @Column("int", { name: "iAdvertBannerId" })
  iAdvertBannerId: number;

  @ManyToOne(
    () => AdvertiseBanners,
    (advertiseBanner) => advertiseBanner.bannerImpressions,
  )
  @JoinColumn({
    name: "iAdvertBannerId",
    referencedColumnName: "iAdvertBannerId",
  })
  advertiseBanner: AdvertiseBanners;

  @Column("timestamp", {
    name: "dDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  dDateTime: Date;

  @Column("varchar", { name: "vIP", length: 255 })
  vIp: string;

  @Column("enum", {
    name: "eUserType",
    comment: "'Passenger','Driver','Store'",
    enum: ["Passenger", "Driver", "Store"],
    default: "Passenger",
  })
  eUserType: "Passenger" | "Driver" | "Store";

  @Column("int", { name: "iUserId" })
  iUserId: number;
}
