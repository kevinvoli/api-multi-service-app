import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("iTripId", ["iTripId"], {})
@Index("iDriverRequestId", ["iDriverRequestId"], {})
@Index("iDriverId", ["iDriverId"], {})
@Entity("__related_communes", { schema: "amygo1" })
export class RelatedCommunes {
  @PrimaryGeneratedColumn({ type: "int", name: "communeId" })
  communeId: number;

  @Column("int", { name: "iDriverRequestId", nullable: true })
  iDriverRequestId: number | null;

  @Column("int", { name: "iTripId", nullable: true })
  iTripId: number | null;

  @Column("int", { name: "iUserId", nullable: true })
  iUserId: number | null;

  @Column("int", { name: "iDriverId", nullable: true })
  iDriverId: number | null;

  @Column("varchar", { name: "startCommune", nullable: true, length: 255 })
  startCommune: string | null;

  @Column("varchar", { name: "startLong", nullable: true, length: 255 })
  startLong: string | null;

  @Column("varchar", { name: "startLat", nullable: true, length: 255 })
  startLat: string | null;

  @Column("varchar", { name: "endCommune", nullable: true, length: 255 })
  endCommune: string | null;

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
