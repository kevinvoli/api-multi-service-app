import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { Company } from "../../../users/company/entities/company.entity";

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

  @ManyToOne(() => RegisterUser, (user) => user.favoriteStores)
  @JoinColumn({ name: "iUserId", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @ManyToOne(() => Company, (company) => company.favoriteStores)
  @JoinColumn({ name: "iCompanyId", referencedColumnName: "iCompanyId" })
  company: Company;

  @Column("enum", {
    name: "eIsFavourite",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eIsFavourite: "Yes" | "No";

  @Column("datetime", { name: "dFavDate" })
  dFavDate: Date;
}
