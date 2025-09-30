import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ServiceCategories } from "../../../core_app/service-categories/entities/service-category.entity";
import { ObjectCategories } from "../object-categories/entities/object-category.entity";

@Index("id_commando", ["idService"], {})
@Entity("__object_realisations", { schema: "amygo1" })
export class ObjectRealisations {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_service", nullable: true })
  idService: number | null;

  @ManyToOne(() => ServiceCategories, (service) => service.objectRealisations)
  @JoinColumn({ name: "id_service", referencedColumnName: "iServiceId" })
  service: ServiceCategories;

  @Column("int", { name: "id_categorie", nullable: true })
  idCategorie: number | null;

  @ManyToOne(() => ObjectCategories, (category) => category.objectRealisations)
  @JoinColumn({ name: "id_categorie", referencedColumnName: "id" })
  categorie: ObjectCategories;

  @Column("int", { name: "quantite", nullable: true })
  quantite: number | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;
}
