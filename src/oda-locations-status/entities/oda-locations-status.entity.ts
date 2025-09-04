import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("__oda_locations_status", { schema: "amygo1" })
export class OdaLocationsStatus {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("int", { name: "iOrderId" })
  iOrderId: number;

  @Column("int", { name: "iStatusCode", comment: "Relation with order status" })
  iStatusCode: number;

  @Column("datetime", { name: "dDate" })
  dDate: Date;
}
