import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_address", { schema: "amygo1" })
export class UserAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserAddressId" })
  iUserAddressId: number;

  @Column("int", {
    name: "iUserId",
    comment:
      "Linked with register_user- iUserId OR register_driver - iDriverId",
  })
  iUserId: number;

  @Column("enum", { name: "eUserType", enum: ["Driver", "Rider"] })
  eUserType: "Driver" | "Rider";

  @Column("text", { name: "vServiceAddress" })
  vServiceAddress: string;

  @Column("varchar", { name: "vBuildingNo", length: 100 })
  vBuildingNo: string;

  @Column("text", { name: "vLandmark" })
  vLandmark: string;

  @Column("text", { name: "vAddressType" })
  vAddressType: string;

  @Column("text", { name: "vLatitude" })
  vLatitude: string;

  @Column("text", { name: "vLongitude" })
  vLongitude: string;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
