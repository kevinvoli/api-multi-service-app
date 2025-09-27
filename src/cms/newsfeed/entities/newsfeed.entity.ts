import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("newsfeed", { schema: "amygo1" })
export class Newsfeed {
  @PrimaryGeneratedColumn({ type: "int", name: "iNewsfeedId" })
  iNewsfeedId: number;

  @Column("longtext", { name: "vTitle" })
  vTitle: string;

  @Column("varchar", { name: "vNewfeedImage", length: 250 })
  vNewfeedImage: string;

  @Column("longtext", { name: "tDescription" })
  tDescription: string;

  @Column("timestamp", {
    name: "tPublishdate",
    default: () => "CURRENT_TIMESTAMP",
  })
  tPublishdate: Date;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("enum", {
    name: "eType",
    enum: ["News", "Notification"],
    default: "News",
  })
  eType: "News" | "Notification";

  @Column("enum", {
    name: "eUserType",
    enum: ["driver", "rider", "company", "all"],
  })
  eUserType: "driver" | "rider" | "company" | "all";
}