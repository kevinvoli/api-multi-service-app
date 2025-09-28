import { DriverVehicle } from "../../../users/driver-vehicle/entities/driver-vehicle.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("make", { schema: "amygo1" })
export class Make {
  @PrimaryGeneratedColumn({ type: "int", name: "iMakeId" })
  iMakeId: number;

  @OneToMany(() => DriverVehicle, (driverVehicle) => driverVehicle.make)
  driverVehicles: DriverVehicle[];

  @Column("varchar", { name: "vMake", length: 255 })
  vMake: string;

  @Column("enum", {
    name: "eModelFound",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eModelFound: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
