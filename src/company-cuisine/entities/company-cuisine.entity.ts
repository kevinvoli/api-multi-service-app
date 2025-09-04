import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQUE_CUISINE", ["iCompanyId", "cuisineId"], { unique: true })
@Index("ccId", ["ccId"], {})
@Entity("company_cuisine", { schema: "amygo1" })
export class CompanyCuisine {
  @PrimaryGeneratedColumn({ type: "int", name: "ccId" })
  ccId: number;

  @Column("int", { name: "iCompanyId" })
  iCompanyId: number;

  @Column("int", { name: "cuisineId" })
  cuisineId: number;
}
