import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iLocatioId", ["iLocatioId"], { unique: true })
@Entity("location_wise_fare", { schema: "amygo1" })
export class LocationWiseFare {
  @PrimaryGeneratedColumn({ type: "int", name: "iLocatioId" })
  iLocatioId: number;

  @Column("int", { name: "iToLocationId" })
  iToLocationId: number;

  @Column("int", { name: "iFromLocationId" })
  iFromLocationId: number;

  @Column("varchar", { name: "vToCity", length: 255 })
  vToCity: string;

  @Column("varchar", { name: "vFromCity", length: 255 })
  vFromCity: string;

  @Column("float", { name: "fFlatfare", precision: 12 })
  fFlatfare: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iVehicleTypeId" })
  iVehicleTypeId: number;
}
