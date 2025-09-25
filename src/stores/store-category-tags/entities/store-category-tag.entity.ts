import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id", ["id"], { unique: true })
@Entity("store_category_tags", { schema: "amygo1" })
export class StoreCategoryTags {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "iCategoryId" })
  iCategoryId: number;
}
