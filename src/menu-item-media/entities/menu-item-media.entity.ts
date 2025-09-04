import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("menu_item_media", { schema: "amygo1" })
export class MenuItemMedia {
  @PrimaryGeneratedColumn({ type: "int", name: "iMediaId" })
  iMediaId: number;

  @Column("int", { name: "iMenuItemId" })
  iMenuItemId: number;

  @Column("text", { name: "vImage" })
  vImage: string;
}
