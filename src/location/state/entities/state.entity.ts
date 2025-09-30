import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "../../country/entities/country.entity";
import { City } from "../../city/entities/city.entity";

@Entity("state", { schema: "amygo1" })
export class State {
  @PrimaryGeneratedColumn({ type: "int", name: "iStateId" })
  iStateId: number;

  @Column("int", { name: "iCountryId", default: "0" })
  iCountryId: number;

  @ManyToOne(() => Country, (country) => country.states)
  @JoinColumn({ name: "iCountryId", referencedColumnName: "iCountryId" })
  country: Country;

  @Column("varchar", { name: "vStateCode", length: 32, default: () => "''" })
  vStateCode: string;

  @Column("varchar", { name: "vState", length: 100 })
  vState: string;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";

  @OneToMany(() => City, (city) => city.state)
  cities: City[];
}
