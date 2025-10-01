import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";

@Entity("driver_doc", { schema: "amygo1" })
export class DriverDoc {
  @PrimaryColumn({ type: "int", name: "iDriverDocId" })
  iDriverDocId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverDocs)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("varchar", { name: "vLicence", length: 500 })
  vLicence: string;

  @Column("varchar", { name: "vNoc", length: 500 })
  vNoc: string;

  @Column("varchar", { name: "vCerti", length: 500 })
  vCerti: string;
}
