import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";
import { DeliveryPreferences } from "../../../delivery/delivery-preferences/entities/delivery-preference.entity";

@Entity("driver_preferences", { schema: "amygo1" })
export class DriverPreferences {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverPreferenceId" })
  iDriverPreferenceId: number;

  @Column("int", { name: "iPreferenceId" })
  iPreferenceId: number;

  @ManyToOne(
    () => DeliveryPreferences,
    (deliveryPreference) => deliveryPreference.driverPreferences,
  )
  @JoinColumn({ name: "iPreferenceId", referencedColumnName: "iPreferenceId" })
  preference: DeliveryPreferences;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverPreferences)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

  @Column("enum", { name: "eType", enum: ["Yes", "No"], default: "No" })
  eType: "Yes" | "No";
}
