import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("airport_location_master", { schema: "amygo1" })
export class AirportLocationMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "iAirportLocationId" })
  iAirportLocationId: number;

  @Column("int", { name: "iCountryId" })
  iCountryId: number;

  @Column("varchar", { name: "vLocationName", length: 255 })
  vLocationName: string;

  @Column("text", { name: "tPassengerLatitude" })
  tPassengerLatitude: string;

  @Column("text", { name: "tPassengerLongitude" })
  tPassengerLongitude: string;

  @Column("text", { name: "tDriverLatitude" })
  tDriverLatitude: string;

  @Column("text", { name: "tDriverLongitude" })
  tDriverLongitude: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
