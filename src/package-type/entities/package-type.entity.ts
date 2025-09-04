import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("package_type", { schema: "amygo1" })
export class PackageType {
  @PrimaryGeneratedColumn({ type: "int", name: "iPackageTypeId" })
  iPackageTypeId: number;

  @Column("text", { name: "vName" })
  vName: string;

  @Column("text", { name: "vName_EN" })
  vNameEn: string;

  @Column("text", { name: "vName_FR" })
  vNameFr: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: () => "'Active'",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @Column("int", { name: "iDeliveryFieldId" })
  iDeliveryFieldId: number;
}
