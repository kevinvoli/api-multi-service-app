import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("store_favorites", { schema: "amygo1" })
export class StoreFavorites {
  @PrimaryGeneratedColumn({ type: "int", name: "iStoreFavorite" })
  iStoreFavorite: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iServiceId" })
  iServiceId: number;

  @Column("enum", {
    name: "eFavStore",
    enum: ["Yes", "No"],
    default: "No",
  })
  eFavStore: "Yes" | "No";
}
