import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("all_database_details", { schema: "amygo1" })
export class AllDatabaseDetails {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "host_name", length: 50 })
  hostName: string;

  @Column("varchar", { name: "db_name", length: 50 })
  dbName: string;

  @Column("varchar", { name: "password", length: 50 })
  password: string;

  @Column("varchar", { name: "db_user", length: 50 })
  dbUser: string;

  @Column("varchar", { name: "mls_name", nullable: true, length: 50 })
  mlsName: string | null;
}
