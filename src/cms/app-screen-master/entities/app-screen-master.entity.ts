import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("app_screen_master", { schema: "amygo1" })
export class AppScreenMaster {
  @PrimaryGeneratedColumn({ type: "int", name: "lPage_id" })
  lPageId: number;

  @Column("varchar", { name: "vScreenName", length: 255 })
  vScreenName: string;

  @Column("varchar", { name: "vScreenImage", length: 255 })
  vScreenImage: string;

  @Column("int", { name: "iParentId" })
  iParentId: number;

  @ManyToOne(() => AppScreenMaster, (appScreenMaster) => appScreenMaster.children)
  @JoinColumn({ name: "iParentId", referencedColumnName: "lPageId" })
  parent: AppScreenMaster;

  @OneToMany(() => AppScreenMaster, (appScreenMaster) => appScreenMaster.parent)
  children: AppScreenMaster[];

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("enum", {
    name: "eAppType",
    enum: ["Ride", "Delivery", "UberX", "Deliverall", "General"],
    default: "General",
  })
  eAppType: "Ride" | "Delivery" | "UberX" | "Deliverall" | "General";
}
