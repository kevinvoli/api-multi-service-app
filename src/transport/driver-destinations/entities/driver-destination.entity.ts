import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_destinations", { schema: "amygo1" })
export class DriverDestinations {
  @PrimaryGeneratedColumn({ type: "int", name: "idriverdestinations" })
  idriverdestinations: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("text", { name: "tDestLatitude" })
  tDestLatitude: string;

  @Column("text", { name: "tDestLongitude" })
  tDestLongitude: string;

  @Column("text", { name: "tDaddress" })
  tDaddress: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Inactive", "Active"],
    default: "Inactive",
  })
  eStatus: "Inactive" | "Active";
}
