import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("food_menu_images", { schema: "amygo1" })
export class FoodMenuImages {
  @PrimaryGeneratedColumn({ type: "int", name: "iFoodMenuImageId" })
  iFoodMenuImageId: number;

  @Column("int", { name: "iFoodMenuId" })
  iFoodMenuId: number;

  @Column("varchar", { name: "vImageName", length: 255 })
  vImageName: string;

  @Column("datetime", { name: "dDateAdded" })
  dDateAdded: Date;
}
