import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQUE_FAV_STORE", ["iUserId", "iCompanyId", "eIsFavourite"], {
  unique: true,
})
@Index("iUserId", ["iUserId"], {})
@Index("iCompanyId", ["iCompanyId"], {})
@Index("iFavstoreId", ["iFavstoreId"], {})
@Entity("favorite_store", { schema: "amygo1" })
export class FavoriteStore {
  @PrimaryGeneratedColumn({ type: "int", name: "iFavstoreId" })
  iFavstoreId: number;

  @Column("int", { name: "iUserId" })
  iUserId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("enum", {
    name: "eIsFavourite",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eIsFavourite: "Yes" | "No";

  @Column("datetime", { name: "dFavDate" })
  dFavDate: Date;
}
