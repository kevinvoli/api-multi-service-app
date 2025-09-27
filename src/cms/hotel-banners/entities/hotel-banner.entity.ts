import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("hotel_banners", { schema: "amygo1" })
export class HotelBanners {
  @PrimaryGeneratedColumn({ type: "int", name: "iHotelBannerId" })
  iHotelBannerId: number;

  @Column("int", { name: "iHotelId", default: "0" })
  iHotelId: number;

  @Column("enum", {
    name: "eStatus",
    nullable: true,
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | null;

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vTitle", nullable: true, length: 100 })
  vTitle: string | null;

  @Column("varchar", { name: "vImage", length: 100 })
  vImage: string;

  @Column("varchar", { name: "vCode", length: 100 })
  vCode: string;

  @Column("int", { name: "iUniqueId" })
  iUniqueId: number;
}
