import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("location_master", { schema: "amygo1" })
export class LocationMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "iLocationId" })
  iLocationId: number;

  @Column("int", { name: "iCountryId" })
  iCountryId: number;

  @Column("varchar", { name: "vLocationName", length: 255 })
  vLocationName: string;

  @Column("text", { name: "tLatitude" })
  tLatitude: string;

  @Column("text", { name: "tLongitude" })
  tLongitude: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive", "Deleted"] })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eFor",
    enum: [
      "Restrict",
      "VehicleType",
      "FixFare",
      "UserDeliveryCharge",
      "AirportSurcharge",
      "FlyStation",
      "Banner",
      "PromoCode",
    ],
    default: "Restrict",
  })
  eFor:
    | "Restrict"
    | "VehicleType"
    | "FixFare"
    | "UserDeliveryCharge"
    | "AirportSurcharge"
    | "FlyStation"
    | "Banner"
    | "PromoCode";

  @Column("enum", {
    name: "eSiteDemo",
    enum: ["Yes", "No"],
    default: "No",
  })
  eSiteDemo: "Yes" | "No";

  @Column("polygon", { name: "mBoundary", nullable: true })
  mBoundary: string | null;

  @Column("text", { name: "tCentroidLattitude" })
  tCentroidLattitude: string;

  @Column("text", { name: "tCentroidLongitude" })
  tCentroidLongitude: string;

  @Column("varchar", { name: "vLocationAddress", length: 255 })
  vLocationAddress: string;
}
