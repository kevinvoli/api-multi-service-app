import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("masking_numbers", { schema: "amygo1" })
export class MaskingNumbers {
  @PrimaryGeneratedColumn({ type: "int", name: "masknum_id" })
  masknumId: number;

  @Column("varchar", { name: "mask_number", length: 100 })
  maskNumber: string;

  @Column("datetime", { name: "adding_date" })
  addingDate: Date;

  @Column("varchar", { name: "vCountry", length: 50 })
  vCountry: string;

  @Column("enum", { name: "eStatus", enum: ["Active", "Inactive"] })
  eStatus: "Active" | "Inactive";
}
