import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("city", { schema: "amygo1" })
export class City {
  @PrimaryGeneratedColumn({ type: "int", name: "iCityId" })
  iCityId: number;

  @Column("varchar", { name: "vCity", length: 50 })
  vCity: string;

  @Column("int", { name: "iCountryId" })
  iCountryId: number;

  @Column("int", { name: "iStateId" })
  iStateId: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
