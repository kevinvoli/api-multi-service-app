import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("trip_delivery_fields", { schema: "amygo1" })
export class TripDeliveryFields {
  @PrimaryGeneratedColumn({ type: "int", name: "iTripDeliveryFieldId" })
  iTripDeliveryFieldId: number;

  @Column("int", {
    name: "iTripId",
    comment: "link with trips table",
    default: "0",
  })
  iTripId: number;

  @Column("int", {
    name: "iDeliveryFieldId",
    comment: "link with delivery_fields table",
  })
  iDeliveryFieldId: number;

  @Column("text", { name: "iCabBookingId" })
  iCabBookingId: string;

  @Column("text", { name: "iCabRequestId" })
  iCabRequestId: string;

  @Column("int", { name: "iTripDeliveryLocationId", default: "0" })
  iTripDeliveryLocationId: number;

  @Column("text", { name: "vValue", comment: "value enter by user" })
  vValue: string;
}
