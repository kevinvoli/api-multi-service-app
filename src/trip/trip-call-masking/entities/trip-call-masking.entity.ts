import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_call_masking", { schema: "amygo1" })
export class TripCallMasking {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripCallmaskid" })
  iTripCallmaskid: number;

  @Column("int", { name: "iTripid" })
  iTripid: number;

  @Column("varchar", { name: "DriverPhone", length: 100 })
  driverPhone: string;

  @Column("varchar", { name: "DriverPhoneCode", length: 10 })
  driverPhoneCode: string;

  @Column("varchar", { name: "RiderPhone", length: 100 })
  riderPhone: string;

  @Column("varchar", { name: "UserPhoneCode", length: 10 })
  userPhoneCode: string;

  @Column("varchar", { name: "mask_number", length: 100 })
  maskNumber: string;

  @Column("int", { name: "maskId" })
  maskId: number;

  @Column("int", { name: "call_limit" })
  callLimit: number;
}
