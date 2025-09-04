import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("home_screens", { schema: "amygo1" })
export class HomeScreens {
  @PrimaryGeneratedColumn({ type: "int", name: "iId" })
  iId: number;

  @Column("varchar", { name: "vImageTitle", length: 255 })
  vImageTitle: string;

  @Column("varchar", { name: "vImageName", length: 255 })
  vImageName: string;

  @Column("varchar", { name: "iDescOrd", length: 255 })
  iDescOrd: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
