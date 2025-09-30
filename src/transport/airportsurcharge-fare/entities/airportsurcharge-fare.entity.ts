import { LocationMaster } from "../../../location/location-master/entities/location-master.entity";
import { VehicleType } from "../../../vehicles/vehicle-type/entities/vehicle-type.entity";
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

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

  @ManyToOne(() => LocationMaster, (location) => location.airportSurchargeFares)
  @JoinColumn({ name: "iLocationIds", referencedColumnName: "iLocationId" })
  location: LocationMaster;

  @Column("varchar", { name: "vFromCity", length: 10 })
  vFromCity: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iVehicleTypeId" })
  iVehicleTypeId: number;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.airportSurchargeFares)
  @JoinColumn({
    name: "iVehicleTypeId",
    referencedColumnName: "iVehicleTypeId",
  })
  vehicleType: VehicleType;
}
