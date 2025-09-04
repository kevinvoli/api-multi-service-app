import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("id_commando", ["idService"], {})
@Index("id_responsable", ["libelleFr"], {})
@Entity("__object_categories", { schema: "amygo1" })
export class ObjectCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_service", nullable: true })
  idService: number | null;

  @Column("varchar", { name: "libelle_fr", nullable: true, length: 255 })
  libelleFr: string | null;
}
