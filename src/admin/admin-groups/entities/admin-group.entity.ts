import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_groups", { schema: "amygo1" })
export class AdminGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "iGroupId" })
  iGroupId: number;

  @Column("varchar", { name: "vGroup", length: 255 })
  vGroup: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
