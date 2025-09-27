import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("restricted_negative_area", { schema: "amygo1" })
export class RestrictedNegativeArea {
  @PrimaryGeneratedColumn({ type: "int", name: "iRestrictedNegativeId" })
  iRestrictedNegativeId: number;

  @Column("int", { name: "iLocationId" })
  iLocationId: number;

  @Column("int", { name: "iCountryId" })
  iCountryId: number;

  @Column("int", { name: "iStateId" })
  iStateId: number;

  @Column("int", { name: "iCityId" })
  iCityId: number;

  @Column("text", { name: "vAddress" })
  vAddress: string;

  @Column("enum", {
    name: "eRestrictType",
    enum: ["All", "Pick Up", "Drop Off"],
    default: "All",
  })
  eRestrictType: "All" | "Pick Up" | "Drop Off";

  @Column("enum", { name: "eType", enum: ["Allowed", "Disallowed"] })
  eType: "Allowed" | "Disallowed";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
