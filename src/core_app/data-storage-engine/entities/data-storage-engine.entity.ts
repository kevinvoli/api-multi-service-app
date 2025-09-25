import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("data_storage_engine", { schema: "amygo1" })
export class DataStorageEngine {
  @PrimaryGeneratedColumn({ type: "int", name: "iEngineId" })
  iEngineId: number;

  @Column("text", { name: "tTableName" })
  tTableName: string;

  @Column("enum", {
    name: "eStorageEngine",
    enum: ["MyISAM", "InnoDB"],
    default: () => "'MyISAM'",
  })
  eStorageEngine: "MyISAM" | "InnoDB";

  @Column("enum", {
    name: "eConvertedStorageEngine",
    enum: ["MyISAM", "InnoDB"],
    default: () => "'MyISAM'",
  })
  eConvertedStorageEngine: "MyISAM" | "InnoDB";
}
