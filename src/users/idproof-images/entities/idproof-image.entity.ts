import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterUser } from "../../register-user/entities/register-user.entity";
import { Orders } from "../../../orders/entities/order.entity";

@Entity("idproof_images", { schema: "amygo1" })
export class IdproofImages {
  @PrimaryGeneratedColumn({ type: "int", name: "iImageId" })
  iImageId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @ManyToOne(() => RegisterUser, (user) => user.idproofImages)
  @JoinColumn({ name: "iUserId", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("text", { name: "vImage" })
  vImage: string;

  @Column("timestamp", {
    name: "tAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tAddedDate: Date;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @ManyToOne(() => Orders, (order) => order.idproofImages)
  @JoinColumn({ name: "iOrderId", referencedColumnName: "iOrderId" })
  order: Orders;
}
