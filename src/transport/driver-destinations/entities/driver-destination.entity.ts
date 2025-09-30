import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("driver_destinations", { schema: "amygo1" })
export class DriverDestinations {
  @PrimaryGeneratedColumn({ type: "int", name: "idriverdestinations" })
  idriverdestinations: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverDestinations)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("text", { name: "tDestLatitude" })
  tDestLatitude: string;

  @Column("text", { name: "tDestLongitude" })
  tDestLongitude: string;

  @Column("text", { name: "tDaddress" })
  tDaddress: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Inactive", "Active"],
    default: "Inactive",
  })
  eStatus: "Inactive" | "Active";
}
