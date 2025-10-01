import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterUser } from "../../register-user/entities/register-user.entity";
import { RegisterDriver } from "../../register-driver/entities/register-driver.entity";

@Entity("driver_favorites", { schema: "amygo1" })
export class DriverFavorites {
  @PrimaryGeneratedColumn({ type: "int", name: "iDriverFavorite" })
  iDriverFavorite: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @ManyToOne(() => RegisterUser, (user) => user.driverFavorites)
  @JoinColumn({ name: "iUserId", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("int", { name: "iDriverId" })
  iDriverId: number;

  @ManyToOne(() => RegisterDriver, (driver) => driver.driverFavorites)
  @JoinColumn({ name: "iDriverId", referencedColumnName: "iDriverId" })
  driver: RegisterDriver;

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
