import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iLocatioId", ["iLocatioId"], { unique: true })
@Index("iToLocationId", ["iToLocationId"], {})
@Index("iFromLocationId", ["iFromLocationId"], {})
@Entity("fly_location_wise_fare", { schema: "amygo1" })
export class FlyLocationWiseFare {
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

  @Column("float", {
    name: "fFlatfare",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fFlatfare: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "iVehicleTypeId" })
  iVehicleTypeId: number;

  @Column("mediumtext", { name: "tDistance" })
  tDistance: string;
}
