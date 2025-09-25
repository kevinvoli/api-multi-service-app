import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iLocatioId", ["iLocatioId"], { unique: true })
@Entity("airportsurcharge_fare", { schema: "amygo1" })
export class AirportsurchargeFare {
  @PrimaryGeneratedColumn({ type: "int", name: "iLocatioId" })
  iLocatioId: number;

  @Column("float", { name: "fpickupsurchargefare", precision: 12 })
  fpickupsurchargefare: number;

  @Column("float", { name: "fdropoffsurchargefare", precision: 12 })
  fdropoffsurchargefare: number;

  @Column("int", { name: "iLocationIds" })
  iLocationIds: number;

  @Column("varchar", { name: "vFromCity", length: 10 })
  vFromCity: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iVehicleTypeId" })
  iVehicleTypeId: number;
}
