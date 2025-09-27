import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver_favorites", { schema: "amygo1" })
export class DriverFavorites {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverFavorite" })
  iDriverFavorite: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @Column("enum", {
    name: "eType",
    enum: ["Ride", "Deliver", "UberX", "Multi-Delivery"],
    default: "Ride",
  })
  eType: "Ride" | "Deliver" | "UberX" | "Multi-Delivery";

  @Column("enum", {
    name: "eFavDriver",
    comment: "0=> 'Not Favorite', '1'=> 'Favorite'",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFavDriver: "Yes" | "No";
}
