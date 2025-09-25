import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seo_sections", { schema: "amygo1" })
export class SeoSections {
  @PrimaryGeneratedColumn({ type: "int", name: "iId" })
  iId: number;

  @Column("varchar", { name: "vPagename", length: 500 })
  vPagename: string;

  @Column("varchar", { name: "vPagetitle", length: 500 })
  vPagetitle: string;

  @Column("varchar", { name: "vMetakeyword", length: 500 })
  vMetakeyword: string;

  @Column("text", { name: "tDescription" })
  tDescription: string;
}
