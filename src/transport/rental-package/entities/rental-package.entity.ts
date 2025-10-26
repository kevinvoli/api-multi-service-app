import { CabBooking } from "../../cab-booking/entities/cab-booking.entity";
import { CabRequestNow } from "../../cab-request-now/entities/cab-request-now.entity";
import { Trips } from "../../trips/entities/trip.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("rental_package", { schema: "amygo1" })
export class RentalPackage {
  @PrimaryGeneratedColumn({ type: "int", name: "iRentalPackageId" })
  iRentalPackageId: number;

  @Column("int", { name: "iVehicleTypeId" })
  iVehicleTypeId: number;

  @Column("varchar", { name: "vPackageName_EN", length: 255 })
  vPackageNameEn: string;

  @Column("varchar", { name: "vPackageName_FR", length: 255 })
  vPackageNameFr: string;

  @Column("float", {
    name: "fPrice",
    precision: 10,
    scale: 2,
    default: () => "'0.00'",
  })
  fPrice: number;

  @Column("float", { name: "fKiloMeter", precision: 12 })
  fKiloMeter: number;

  @Column("float", { name: "fHour", precision: 12 })
  fHour: number;

  @Column("float", { name: "fPricePerKM", precision: 12 })
  fPricePerKm: number;

  @Column("float", {
    name: "fPricePerHour",
    comment: "Store price for a minute",
    precision: 12,
  })
  fPricePerHour: number;

  @OneToMany(() => CabBooking, (cabBooking) => cabBooking.rentalPackage)
  cabBookings: CabBooking[];

  @OneToMany(
    () => CabRequestNow,
    (cabRequestNow) => cabRequestNow.rentalPackage,
  )
  cabRequestNows: CabRequestNow[];

  @OneToMany(() => Trips, (trip) => trip.rentalPackage)
  trips: Trips[];
}
