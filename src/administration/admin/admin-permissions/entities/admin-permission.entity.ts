import { AdminGroupPermission } from "../admin-group-permission/entities/admin-group-permission.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_permissions", { schema: "amygo1" })
export class AdminPermissions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "permission_name", length: 55 })
  permissionName: string;

  @Column("enum", {
    name: "status",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  status: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "display_group_id" })
  displayGroupId: number;

  @Column("int", { name: "display_order" })
  displayOrder: number;

  @Column("varchar", {
    name: "vDispalyAppType",
    length: 255,
    default: "All",
  })
  vDispalyAppType: string;

  @Column("enum", {
    name: "eFor",
    enum: [
      "",
      "General",
      "Ride",
      "Delivery",
      "Ride",
      "Delivery",
      "UberX",
      "Ride",
      "Delivery",
      "UberX",
      "Multi-Delivery",
      "DeliverAll",
      "Kiosk",
      "Fly",
      "Bidding",
      "RentItem",
      "RentEstate",
      "RentCars",
      "TrackService",
      "RideShare",
      "NearBy",
    ],
    default: "",
  })
  eFor:
    | ""
    | "General"
    | "Ride"
    | "Delivery"
    | "Ride,Delivery"
    | "UberX"
    | "Ride,Delivery,UberX"
    | "Multi-Delivery"
    | "DeliverAll"
    | "Kiosk"
    | "Fly"
    | "Bidding"
    | "RentItem"
    | "RentEstate"
    | "RentCars"
    | "TrackService"
    | "RideShare"
    | "NearBy";

  @OneToMany(() => AdminGroupPermission, (agp) => agp.permission)
  groups: AdminGroupPermission[];
}
