import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ServiceCategories } from "../../service-categories/entities/service-category.entity";

@Entity("master_service_menu", { schema: "amygo1" })
export class MasterServiceMenu {
  @PrimaryGeneratedColumn({ type: "int", name: "iServiceMenuId" })
  iServiceMenuId: number;

  @Column("text", { name: "vTitle" })
  vTitle: string;

  @Column("int", { name: "iParentId" })
  iParentId: number;

  @ManyToOne(
    () => MasterServiceMenu,
    (masterServiceMenu) => masterServiceMenu.children,
  )
  @JoinColumn({ name: "iParentId", referencedColumnName: "iServiceMenuId" })
  parent: MasterServiceMenu;

  @OneToMany(
    () => MasterServiceMenu,
    (masterServiceMenu) => masterServiceMenu.parent,
  )
  children: MasterServiceMenu[];

  @Column("enum", {
    name: "eType",
    enum: [
      "Ride",
      "Deliver",
      "DeliverAll",
      "UberX",
      "Bidding",
      "VideoConsult",
      "MedicalServices",
    ],
  })
  eType:
    | "Ride"
    | "Deliver"
    | "DeliverAll"
    | "UberX"
    | "Bidding"
    | "VideoConsult"
    | "MedicalServices";

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @ManyToOne(
    () => ServiceCategories,
    (serviceCategory) => serviceCategory.masterServiceMenus,
  )
  @JoinColumn({ name: "iServiceId", referencedColumnName: "iServiceId" })
  service: ServiceCategories;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive", "Deleted"] })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iDisplayOrder" })
  iDisplayOrder: number;
}
