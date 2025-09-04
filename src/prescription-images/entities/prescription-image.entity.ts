import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("prescription_images", { schema: "amygo1" })
export class PrescriptionImages {
  @PrimaryGeneratedColumn({ type: "int", name: "iImageId" })
  iImageId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("varchar", { name: "duplicate_id", length: 50 })
  duplicateId: string;

  @Column("varchar", { name: "vImage", length: 255 })
  vImage: string;

  @Column("timestamp", {
    name: "tAddedDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tAddedDate: Date;

  @Column("timestamp", {
    name: "tModifiedDate",
    default: () => "'0000-00-00 00:00:00'",
  })
  tModifiedDate: Date;

  @Column("enum", {
    name: "eStatus",
    comment: "Active,Inactive",
    enum: ["Active", "Inactive"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive";

  @Column("int", { name: "order_id" })
  orderId: number;
}
