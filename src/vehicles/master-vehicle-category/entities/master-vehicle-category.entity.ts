import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("master_vehicle_category", { schema: "amygo1" })
export class MasterVehicleCategory {
  @PrimaryGeneratedColumn({ type: "int", name: "iMasterVehicleCategoryId" })
  iMasterVehicleCategoryId: number;

  @Column("varchar", { name: "vCategoryName", length: 500 })
  vCategoryName: string;

  @Column("int", { name: "iVehicleCategoryId" })
  iVehicleCategoryId: number;
}
