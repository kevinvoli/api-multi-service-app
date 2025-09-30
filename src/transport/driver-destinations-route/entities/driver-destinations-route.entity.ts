import { RegisterDriver } from "../../../users/register-driver/entities/register-driver.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("driver_destinations_route", { schema: "amygo1" })
export class DriverDestinationsRoute {
  @PrimaryGeneratedColumn({ type: "int", name: "iRootId" })
  iRootId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverDestinationsRoutes)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("longtext", { name: "tDestLatitudes" })
  tDestLatitudes: string;

  @Column("longtext", { name: "tDestLongitudes" })
  tDestLongitudes: string;

  @Column("text", { name: "tAdress" })
  tAdress: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
