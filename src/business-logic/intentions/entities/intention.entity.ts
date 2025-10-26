import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { VehicleType } from "../../../vehicles/vehicle-type/entities/vehicle-type.entity";
import { RegisterUser } from "../../../users/register-user/entities/register-user.entity";
import { ServiceCategories } from "../../../core_app/service-categories/entities/service-category.entity";
import { Company } from "../../../users/company/entities/company.entity";
import { FoodMenu } from "../../../delivery/food-menu/entities/food-menu.entity";
import { IntentionsCriteres } from "../../intentions-criteres/entities/intentions-critere.entity";

@Entity("__intentions", { schema: "amygo1" })
export class Intentions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "vehicule_type_id", nullable: true })
  vehiculeTypeId: number | null;

  @ManyToOne(() => VehicleType, (vehicleType) => vehicleType.intentions)
  @JoinColumn({
    name: "vehicule_type_id",
    referencedColumnName: "iVehicleTypeId",
  })
  vehicleType: VehicleType;

  @Column("varchar", { name: "type", length: 50 })
  type: string;

  @Column("int", { name: "userID", nullable: true })
  userId: number | null;

  @ManyToOne(() => RegisterUser, (user) => user.intentions)
  @JoinColumn({ name: "userID", referencedColumnName: "iUserId" })
  user: RegisterUser;

  @Column("int", { name: "service_id", default: "0" })
  serviceId: number;

  @ManyToOne(() => ServiceCategories, (service) => service.intentions)
  @JoinColumn({ name: "service_id", referencedColumnName: "iServiceId" })
  service: ServiceCategories;

  @Column("int", { name: "store_id", nullable: true })
  storeId: number | null;

  @ManyToOne(() => Company, (store) => store.intentions)
  @JoinColumn({ name: "store_id", referencedColumnName: "iCompanyId" })
  store: Company;

  @Column("int", { name: "item_id", nullable: true })
  itemId: number | null;

  @ManyToOne(() => FoodMenu, (item) => item.intentions)
  @JoinColumn({ name: "item_id", referencedColumnName: "iFoodMenuId" })
  item: FoodMenu;

  @Column("varchar", { name: "commune", nullable: true, length: 255 })
  commune: string | null;

  @Column("varchar", { name: "startLong", nullable: true, length: 255 })
  startLong: string | null;

  @Column("varchar", { name: "startLat", nullable: true, length: 255 })
  startLat: string | null;

  @Column("varchar", { name: "communeEnd", nullable: true, length: 255 })
  communeEnd: string | null;

  @Column("varchar", { name: "endLong", nullable: true, length: 255 })
  endLong: string | null;

  @Column("varchar", { name: "endLat", nullable: true, length: 255 })
  endLat: string | null;

  @Column("timestamp", {
    name: "requestDate",
    default: () => "CURRENT_TIMESTAMP",
  })
  requestDate: Date;

  @OneToMany(
    () => IntentionsCriteres,
    (intentionsCritere) => intentionsCritere.intention,
  )
  intentionsCriteres: IntentionsCriteres[];
}
