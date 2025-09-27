import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("make", { schema: "amygo1" })
export class Make {
  @PrimaryGeneratedColumn({ type: "int", name: "iMakeId" })
  iMakeId: number;

  @Column("varchar", { name: "vMake", length: 255 })
  vMake: string;

  @Column("enum", {
    name: "eModelFound",
    enum: ["Yes", "No"],
    default: "Yes",
  })
  eModelFound: "Yes" | "No";

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
