import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_services_video_consult_charges", { schema: "amygo1" })
export class DriverServicesVideoConsultCharges {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverServiceId" })
  iDriverServiceId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("int", { name: "iVehicleCategoryId" })
  iVehicleCategoryId: number;

  @Column("decimal", {
    name: "eVideoConsultServiceCharge",
    precision: 10,
    scale: 2,
  })
  eVideoConsultServiceCharge: string;

  @Column("enum", { name: "eVideoConsultEnableProvider", enum: ["No", "Yes"] })
  eVideoConsultEnableProvider: "No" | "Yes";

  @Column("text", { name: "eVideoServiceDescription" })
  eVideoServiceDescription: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Pending", "Active", "Inactive"],
    default: () => "'Pending'",
  })
  eStatus: "Pending" | "Active" | "Inactive";

  @Column("enum", {
    name: "eApproved",
    enum: ["No", "Yes"],
    default: () => "'No'",
  })
  eApproved: "No" | "Yes";
}
