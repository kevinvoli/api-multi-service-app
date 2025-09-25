import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("vehicle_category_status_log", { schema: "amygo1" })
export class VehicleCategoryStatusLog {
  @PrimaryGeneratedColumn({ type: "int", name: "iVehicleCategoryLogId" })
  iVehicleCategoryLogId: number;

  @Column("int", { name: "iVehicleCategoryId" })
  iVehicleCategoryId: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
