import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Country } from "../../country/entities/country.entity";
import { State } from "../../state/entities/state.entity";

@Entity("city", { schema: "amygo1" })
export class City {
  @PrimaryGeneratedColumn({ type: "int", name: "iCityId" })
  iCityId: number;

  @Column("varchar", { name: "vCity", length: 50 })
  vCity: string;

  @Column("int", { name: "iCountryId" })
  iCountryId: number;

  @ManyToOne(() => Country, (country) => country.cities)
  @JoinColumn({ name: "iCountryId", referencedColumnName: "iCountryId" })
  country: Country;

  @Column("int", { name: "iStateId" })
  iStateId: number;

  @ManyToOne(() => State, (state) => state.cities)
  @JoinColumn({ name: "iStateId", referencedColumnName: "iStateId" })
  state: State;

  @Column("enum", {
    name: "eStatus",
    enum: ["Active", "Inactive", "Deleted"],
    default: "Active",
  })
  eStatus: "Active" | "Inactive" | "Deleted";
}
