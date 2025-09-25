import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_vehicle_service_request", { schema: "amygo1" })
export class DriverVehicleServiceRequest {
  @PrimaryGeneratedColumn({ type: "int", name: "iRequestId" })
  iRequestId: number;

  @Column("text", { name: "iVehicleCategoryId" })
  iVehicleCategoryId: string;

  @Column("int", { name: "iDriverVehicleId", nullable: true })
  iDriverVehicleId: number | null;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("enum", {
    name: "cRequestStatus",
    enum: ["Pending", "Approve", "Cancel"],
    default: () => "'Pending'",
  })
  cRequestStatus: "Pending" | "Approve" | "Cancel";

  @Column("timestamp", {
    name: "tRequestDate",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  tRequestDate: Date | null;
}
