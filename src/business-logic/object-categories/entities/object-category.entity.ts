import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ServiceCategories } from "../../../core_app/service-categories/entities/service-category.entity";
import { ObjectObjectifs } from "../../object-objectifs/entities/object-objectif.entity";
import { ObjectProspections } from "../../object-prospections/entities/object-prospection.entity";
import { ObjectRealisations } from "../../object-realisation/entities/object-realisation.entity";

@Index("id_commando", ["idService"], {})
@Index("id_responsable", ["libelleFr"], {})
@Entity("__object_categories", { schema: "amygo1" })
export class ObjectCategories {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "id_service", nullable: true })
  idService: number | null;

  @ManyToOne(() => ServiceCategories, (service) => service.objectCategories)
  @JoinColumn({ name: "id_service", referencedColumnName: "iServiceId" })
  service: ServiceCategories;

  @Column("varchar", { name: "libelle_fr", nullable: true, length: 255 })
  libelleFr: string | null;

  @OneToMany(() => ObjectObjectifs, (objectObjectif) => objectObjectif.categorie)
  objectObjectifs: ObjectObjectifs[];

  @OneToMany(
    () => ObjectProspections,
    (objectProspection) => objectProspection.categorie,
  )
  objectProspections: ObjectProspections[];

  @OneToMany(
    () => ObjectRealisations,
    (objectRealisation) => objectRealisation.categorie,
  )
  objectRealisations: ObjectRealisations[];
}
