import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("__intentions", { schema: "amygo1" })
export class Intentions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "vehicule_type_id", nullable: true })
  vehiculeTypeId: number | null;

  @Column("varchar", { name: "type", length: 50 })
  type: string;

  @Column("int", { name: "userID", nullable: true })
  userId: number | null;

  @Column("int", { name: "service_id", default: "0" })
  serviceId: number;

  @Column("int", { name: "store_id", nullable: true })
  storeId: number | null;

  @Column("int", { name: "item_id", nullable: true })
  itemId: number | null;

  @Column("varchar", { name: "commune", nullable: true, length: 255 })
  commune: string | null;

  @Column("varchar", { name: "startLong", nullable: true, length: 255 })
  startLong: string | null;

  @Column("varchar", { name: "startLat", nullable: true, length: 255 })
  startLat: string | null;

  @Column("varchar", { name: "communeEnd", nullable: true, length: 255 })
  communeEnd: string | null;

  @Column("varchar", { name: "endLong", nullable: true, length: 255 })
  endLong: string | null;

  @Column("varchar", { name: "endLat", nullable: true, length: 255 })
  endLat: string | null;

  @Column("timestamp", {
    name: "requestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  requestDate: Date;
}
