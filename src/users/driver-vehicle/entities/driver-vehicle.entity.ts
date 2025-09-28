import { Company } from "../../company/entities/company.entity";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";
import { Model } from "../../../vehicles/model/entities/model.entity";
import { Make } from "../../../vehicles/make/entities/make.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Index("iDriverVehicleId", ["iDriverVehicleId"], {})
@Entity("driver_vehicle", { schema: "amygo1" })
export class DriverVehicle {
  @PrimaryGeneratedColumn({
    type: "int",
    name: "iDriverVehicleId",
    comment: "unique id",
  })
  iDriverVehicleId: number;

  @Column("int", {
    name: "iDriverId",
    comment: "link with registration_driver_details",
  })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (registerDriver) => registerDriver.driverVehicles)
  @JoinColumn([{ name: "iDriverId", referencedColumnName: "iDriverId" }])
  driver: RegisterDriver;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @ManyToOne(() => Company, (company) => company.driverVehicles)
  @JoinColumn([{ name: "iCompanyId", referencedColumnName: "iCompanyId" }])
  company: Company;

  @Column("int", { name: "iMakeId" })
  iMakeId: number;

  @ManyToOne(() => Make, (make) => make.driverVehicles)
  @JoinColumn([{ name: "iMakeId", referencedColumnName: "iMakeId" }])
  make: Make;

  @Column("int", { name: "iModelId" })
  iModelId: number;

  @ManyToOne(() => Model, (model) => model.driverVehicles)
  @JoinColumn([{ name: "iModelId", referencedColumnName: "iModelId" }])
  model: Model;

  @Column("int", { name: "iYear" })
  iYear: number;

  @Column("varchar", {
    name: "vLicencePlate",
    comment: "licence number details",
    length: 100,
  })
  vLicencePlate: string;

  @Column("varchar", { name: "vColour", length: 100 })
  vColour: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Inactive",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("varchar", { name: "vInsurance", length: 255 })
  vInsurance: string;

  @Column("varchar", { name: "vPermit", length: 255 })
  vPermit: string;

  @Column("varchar", { name: "vRegisteration", length: 255 })
  vRegisteration: string;

  @Column("enum", { name: "eCarX", enum: ["Yes", "No"] })
  eCarX: "Yes" | "No";

  @Column("enum", { name: "eCarGo", enum: ["Yes", "No"] })
  eCarGo: "Yes" | "No";

  @Column("longtext", { name: "vCarType", comment: "link with vehicle_type" })
  vCarType: string;

  @Column("longtext", {
    name: "vRentalCarType",
    comment: "link with rental_package",
  })
  vRentalCarType: string;

  @Column("enum", {
    name: "eHandiCapAccessibility",
    enum: ["Yes", "No"],
    default: "No",
  })
  eHandiCapAccessibility: "Yes" | "No";

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Delivery", "UberX", "TrackService"],
    default: "Ride",
  })
  eType: "Ride" | "Delivery" | "UberX" | "TrackService";

  @Column("enum", {
    name: "eAddedDeliverVehicle",
    enum: ["Yes", "No"],
    default: "No",
  })
  eAddedDeliverVehicle: "Yes" | "No";

  @Column("enum", {
    name: "eChildSeatAvailable",
    enum: ["Yes", "No"],
    default: "No",
  })
  eChildSeatAvailable: "Yes" | "No";

  @Column("enum", {
    name: "eWheelChairAvailable",
    enum: ["Yes", "No"],
    default: "No",
  })
  eWheelChairAvailable: "Yes" | "No";

  @Column("int", { name: "iTrackServiceCompanyId" })
  iTrackServiceCompanyId: number;
}
