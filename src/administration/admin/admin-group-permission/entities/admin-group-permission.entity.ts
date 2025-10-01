import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AdminGroups } from "../../admin-groups/entities/admin-group.entity";
import { AdminPermissions } from "../../admin-permissions/entities/admin-permission.entity";

@Entity("admin_group_permission", { schema: "amygo1" })
export class AdminGroupPermission {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "group_id" })
  groupId: number;

  @ManyToOne(() => AdminGroups, (group) => group.permissions)
  @JoinColumn({ name: "group_id", referencedColumnName: "iGroupId" })
  group: AdminGroups;

  @Column("int", { name: "permission_id" })
  permissionId: number;

  @ManyToOne(() => AdminPermissions, (permission) => permission.groups)
  @JoinColumn({ name: "permission_id", referencedColumnName: "id" })
  permission: AdminPermissions;
}