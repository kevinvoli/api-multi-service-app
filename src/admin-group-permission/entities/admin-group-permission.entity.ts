import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_group_permission", { schema: "amygo1" })
export class AdminGroupPermission {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "group_id" })
  groupId: number;

  @Column("int", { name: "permission_id" })
  permissionId: number;
}
