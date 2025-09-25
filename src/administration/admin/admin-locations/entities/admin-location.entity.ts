import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("admin_locations", { schema: "amygo1" })
export class AdminLocations {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "admin_id" })
  adminId: number;

  @Column("int", { name: "location_id" })
  locationId: number;
}
