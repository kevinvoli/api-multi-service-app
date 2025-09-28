import { DriverVehicle } from "../../../users/driver-vehicle/entities/driver-vehicle.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("model", { schema: "amygo1" })
export class Model {
  @PrimaryGeneratedColumn({ type: "int", name: "iModelId" })
  iModelId: number;

  @OneToMany(() => DriverVehicle, (driverVehicle) => driverVehicle.model)
  driverVehicles: DriverVehicle[];

  @Column("int", { name: "iMakeId" })
  iMakeId: number;

  @Column("varchar", { name: "vTitle", length: 100 })
  vTitle: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
