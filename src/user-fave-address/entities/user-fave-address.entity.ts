import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user_fave_address", { schema: "amygo1" })
export class UserFaveAddress {
  @PrimaryGeneratedColumn({ type: "int", name: "iUserFavAddressId" })
  iUserFavAddressId: number;

  @Column("int", {
    name: "iUserId",
    comment:
      "Linked with register_user- iUserId OR register_driver - iDriverId",
  })
  iUserId: number;

  @Column("enum", { name: "eUserType", enum: ["Driver", "Passenger"] })
  eUserType: "Driver" | "Passenger";

  @Column("text", { name: "vAddress" })
  vAddress: string;

  @Column("text", { name: "vLatitude" })
  vLatitude: string;

  @Column("text", { name: "vLongitude" })
  vLongitude: string;

  @Column("datetime", { name: "dAddedDate" })
  dAddedDate: Date;

  @Column("varchar", { name: "vTimeZone", length: 255 })
  vTimeZone: string;

  @Column("enum", {
    name: "eType",
    enum: ["Home", "Work"],
    default: () => "'Home'",
  })
  eType: "Home" | "Work";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
