import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_commando", ["idService"], {})
@Entity("__object_prospections", { schema: "amygo1" })
export class ObjectProspections {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_service", nullable: true })
  idService: number | null;

  @Column("int", { name: "id_categorie", nullable: true })
  idCategorie: number | null;

  @Column("int", { name: "quantite", nullable: true })
  quantite: number | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;
}
