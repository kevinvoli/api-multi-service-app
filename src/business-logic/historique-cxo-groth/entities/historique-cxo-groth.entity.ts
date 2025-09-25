import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("__historique_cxo_groth", { schema: "amygo1" })
export class HistoriqueCxoGroth {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", {
    name: "date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  date: Date | null;

  @Column("int", { name: "ios", default: () => "'0'" })
  ios: number;

  @Column("int", { name: "android", default: () => "'0'" })
  android: number;

  @Column("int", { name: "t1", default: () => "'0'" })
  t1: number;

  @Column("int", { name: "t2", default: () => "'0'" })
  t2: number;

  @Column("int", { name: "t3", default: () => "'0'" })
  t3: number;

  @Column("int", { name: "t4", default: () => "'0'" })
  t4: number;
}
