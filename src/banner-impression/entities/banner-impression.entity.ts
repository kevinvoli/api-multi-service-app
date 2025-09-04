import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("banner_impression", { schema: "amygo1" })
export class BannerImpression {
  @PrimaryGeneratedColumn({ type: "int", name: "iBannerImpLog" })
  iBannerImpLog: number;

  @Column("int", { name: "iAdvertBannerId" })
  iAdvertBannerId: number;

  @Column("timestamp", {
    name: "dDateTime",
    default: () => "CURRENT_TIMESTAMP",
  })
  dDateTime: Date;

  @Column("varchar", { name: "vIP", length: 255 })
  vIp: string;

  @Column("enum", {
    name: "eUserType",
    comment: "'Passenger','Driver','Store'",
    enum: ["Passenger", "Driver", "Store"],
    default: () => "'Passenger'",
  })
  eUserType: "Passenger" | "Driver" | "Store";

  @Column("int", { name: "iUserId" })
  iUserId: number;
}
