import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { Intentions } from "../../intentions/entities/intention.entity";

@Entity("__intentions_criteres", { schema: "amygo1" })
export class IntentionsCriteres {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "user_id", nullable: true })
  userId: number | null;

  @ManyToOne(() => RegisterUser, (user) => user.intentionsCriteres)
  @JoinColumn({ name: "user_id", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("varchar", { name: "stamp", nullable: true, length: 50 })
  stamp: string | null;

  @Column("int", { name: "intention_id" })
  intentionId: number;

  @ManyToOne(() => Intentions, (intention) => intention.intentionsCriteres)
  @JoinColumn({ name: "intention_id", referencedColumnName: "id" })
  intention: Intentions;

  @Column("int", { name: "sous_service" })
  sousService: number;

  @Column("varchar", { name: "commune_id", nullable: true, length: 255 })
  communeId: string | null;

  @Column("varchar", { name: "area", nullable: true, length: 255 })
  area: string | null;

  @Column("varchar", { name: "type", nullable: true, length: 255 })
  type: string | null;

  @Column("varchar", { name: "sous_type", nullable: true, length: 255 })
  sousType: string | null;

  @Column("int", { name: "prix_min", nullable: true })
  prixMin: number | null;

  @Column("int", { name: "prix_max", nullable: true })
  prixMax: number | null;

  @Column("int", { name: "min_surface", nullable: true })
  minSurface: number | null;

  @Column("int", { name: "max_surface", nullable: true })
  maxSurface: number | null;

  @Column("datetime", { name: "date_debut", nullable: true })
  dateDebut: Date | null;

  @Column("datetime", { name: "date_fin", nullable: true })
  dateFin: Date | null;

  @Column("int", { name: "resultats", default: "0" })
  resultats: number;

  @Column("timestamp", {
    name: "requestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  requestDate: Date;
}
