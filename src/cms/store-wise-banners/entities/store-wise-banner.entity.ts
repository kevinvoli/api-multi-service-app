import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ServiceCategories } from "../../../core_app/service-categories/entities/service-category.entity";
import { Company } from "../../../users/company/entities/company.entity";

@Entity("store_wise_banners", { schema: "amygo1" })
export class StoreWiseBanners {
  @PrimaryGeneratedColumn({ type: "int", name: "iBannerId" })
  iBannerId: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @ManyToOne(() => ServiceCategories, (service) => service.storeWiseBanners)
  @JoinColumn({ name: "iServiceId", referencedColumnName: "iServiceId" })
  service: ServiceCategories;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @ManyToOne(() => Company, (company) => company.storeWiseBanners)
  @JoinColumn({ name: "iCompanyId", referencedColumnName: "iCompanyId" })
  company: Company;

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
