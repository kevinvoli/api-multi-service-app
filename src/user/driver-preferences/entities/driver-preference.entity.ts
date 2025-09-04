import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_preferences", { schema: "amygo1" })
export class DriverPreferences {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverPreferenceId" })
  iDriverPreferenceId: number;

  @Column("int", { name: "iPreferenceId" })
  iPreferenceId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("enum", { name: "eType", enum: ["Yes", "No"], default: () => "'No'" })
  eType: "Yes" | "No";
}
