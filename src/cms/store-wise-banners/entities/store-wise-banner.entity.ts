import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("store_wise_banners", { schema: "amygo1" })
export class StoreWiseBanners {
  @PrimaryGeneratedColumn({ type: "int", name: "iBannerId" })
  iBannerId: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;

  @Column("varchar", { name: "vTitle", length: 100 })
  vTitle: string;

  @Column("varchar", { name: "vImage", length: 100 })
  vImage: string;

  @Column("varchar", { name: "vCode", length: 100 })
  vCode: string;

  @Column("int", { name: "iUniqueId" })
  iUniqueId: number;
}
