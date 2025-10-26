import { Administrators } from "../../../administrators/entities/administrator.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AdminGroupPermission } from "../../admin-group-permission/entities/admin-group-permission.entity";

@Entity("admin_groups")
export class AdminGroups {
  @PrimaryGeneratedColumn({ type: "int", name: "iGroupId" })
  iGroupId: number;

  @Column("varchar", { name: "vGroup", length: 255 })
  vGroup: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @OneToMany(() => AdminGroupPermission, (agp) => agp.group)
  permissions: AdminGroupPermission[];

  @OneToMany(() => Administrators, (admin) => admin.group)
  administrators: Administrators[];
}
