import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("language_page_details", { schema: "amygo1" })
export class LanguagePageDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "lp_id" })
  lpId: number;

  @Column("varchar", { name: "lp_name", length: 255 })
  lpName: string;

  @Column("varchar", { name: "lp_link", length: 255 })
  lpLink: string;

  @Column("varchar", { name: "vDescription", length: 500 })
  vDescription: string;

  @Column("enum", {
    name: "lp_type",
    enum: ["web", "driver", "rider"],
    default: "web",
  })
  lpType: "web" | "driver" | "rider";
}
