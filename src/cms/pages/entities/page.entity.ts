import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("pages", { schema: "amygo1" })
export class Pages {
  @PrimaryGeneratedColumn({ type: "int", name: "iPageId" })
  iPageId: number;

  @Column("mediumtext", { name: "vPageName", nullable: true })
  vPageName: string | null;

  @Column("text", { name: "iFrameCode", nullable: true })
  iFrameCode: string | null;

  @Column("mediumtext", { name: "vImage", nullable: true })
  vImage: string | null;

  @Column("mediumtext", { name: "vImage1" })
  vImage1: string;

  @Column("mediumtext", { name: "vImage2" })
  vImage2: string;

  @Column("mediumtext", { name: "vTitle", nullable: true })
  vTitle: string | null;

  @Column("text", { name: "tMetaKeyword", nullable: true })
  tMetaKeyword: string | null;

  @Column("text", { name: "tMetaDescription", nullable: true })
  tMetaDescription: string | null;

  @Column("int", { name: "iOrderBy" })
  iOrderBy: number;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive";

  @Column("text", { name: "vPageTitle_EN", nullable: true })
  vPageTitleEn: string | null;

  @Column("text", { name: "vPageTitle_FR" })
  vPageTitleFr: string;

  @Column("longtext", { name: "tPageDesc_EN", nullable: true })
  tPageDescEn: string | null;

  @Column("longtext", { name: "tPageDesc_FR" })
  tPageDescFr: string;

  @Column("text", { name: "pageSubtitle" })
  pageSubtitle: string;

  @Column("enum", {
    name: "eFor",
    enum: [
      "General",
      "Ride",
      "Delivery",
      "Ride",
      "Delivery",
      "UberX",
      "food",
      "DeliverAll",
      "Ride",
      "Delivery",
      "UberX",
    ],
    default: "General",
  })
  eFor:
    | "General"
    | "Ride"
    | "Delivery"
    | "Ride,Delivery"
    | "UberX"
    | "food"
    | "DeliverAll"
    | "Ride,Delivery,UberX";
}