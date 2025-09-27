import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_permission_display_groups", { schema: "amygo1" })
export class AdminPermissionDisplayGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 55 })
  name: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default:"Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("varchar", {
    name: "vDispalyAppType",
    length: 255,
    default:  "All",
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
      "Ride-Delivery-UberX",
      "Multi-Delivery",
      "DeliverAll",
      "Kiosk",
      "Fly",
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
    | "Ride-Delivery-UberX"
    | "Multi-Delivery"
    | "DeliverAll"
    | "Kiosk"
    | "Fly";
}
